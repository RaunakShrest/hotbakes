/*import { useDispatch } from 'react-redux'
import {setToken} from '../../redux/reducerSlice/userSlice'
import { logout } from '../../redux/reducerSlice/userSlice'
const Home = (props)=> {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
        
      }
    return (
        <div>
        i am Admin page
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
} 
export default Home */
import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 import Link from 'next/link'
 import { Button, message } from 'antd';
 import { useState } from 'react';
 //import styles from './register.module.css';
 import { useRouter } from "next/router";
 import { logout } from '../../redux/reducerSlice/userSlice'
 import styles from './productform.module.css';
import { useDispatch } from 'react-redux';
import {setToken} from '../../redux/reducerSlice/userSlice'

 const ProductSchema = Yup.object().shape({
  productName: Yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Longgggg!')
  .required('Required'),
  productPrice: Yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required'),
  productCategory:Yup.string()
  .min(10, 'Too Short!')
  .max(10, 'Too Long!')
  .required('Required'),
  productDescription:Yup.string()
  .min(10, 'Too Short!')
  .max(10, 'Too Long!')
  .required('Required'),

 });

 const productRegister = () => {
   
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch= useDispatch()
  const router= useRouter();
 //const [isRider, setisRider] = useState(false)

const handleLogout=()=>{
  dispatch(logout())
  router.push('./login')
}

  const registerProduct = async(values)=> {
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
  };

  try{  
    const res = await fetch('http://localhost:4000/products',requestOptions)
    console.log(res)
    const data= await res.json() //data server response bata aauxa 
  if(res && data.success){
    messageApi.success(data.message)
  } else{
    messageApi.error(data.message)
  }
 }catch(err){
  messageApi.warning("Unable to register products") //data.msg is done to fetch data from server as server knows the real data.
  // real data is = whether the data  is (already exist or Register Sucesss!  in this scenario)
 }
}  
/*const handleCreateClick=()=>{
  router.push('/login')
}*/
   return(
    <div>
      <Formik initialValues={{
          productName: '',
          productPrice: '',
          productCategory: '',
          productDescription:''

        }}
      // validationSchema={ProductSchema}
        onSubmit={values => {
          // same shape as initial values
          registerProduct(values)
         
        }} >
      
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <div className={styles.logo}>
            <img src="./styles/logo2.png" className={styles.hotbakeslogo}/> 
            </div>
            <p className={styles.formtitle}><h1>Product Panel</h1></p>

            <Field name="productName" placeholder="productName" className={styles.inputbox}  />
            {errors.productName && touched.productName ? <div className={styles.errorMessage}>{errors.productName}</div> : null}
            <br/>
            <Field name="productPrice" placeholder="productPrice"className={styles.inputbox} />
            {errors.productPrice && touched.productPrice ? <div className={styles.errorMessage}>{errors.productPrice}</div> : null}
            <br/>

              <Field name="productCategory"  placeholder="productCategory" className={styles.inputbox}/>
              {errors.productCategory&& touched.productCategory  ? <div className={styles.Category}>{errors.productCategory }</div> : null}
  
            <br/>

            <Field name="productDescription" placeholder="productDescription"className={styles.inputbox}/>
            {errors.productDescription && touched.productDescription ? <div className={styles.Description}>{errors.productDescription}</div> : null}

        <br/>

            <button type="submit" className={styles.loginSubmitButton}>Submit</button>
            <br/>
            <br/>
     

            <button onClick={handleLogout}>Logout</button>
          </Form>
        )}
      </Formik>
      {contextHolder}
    </div>
  );
            }
 export default productRegister;