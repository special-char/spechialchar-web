"use client"
import Image from 'next/image'
import React from 'react'
import FileAttach from '../../../public/icons/attachment.svg'
import { MdOutlineAttachFile } from "react-icons/md";
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../Button';

const Contact = () => {
  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    project: Yup.string().required('Project info is required'),
    privacy: Yup.boolean().oneOf([true], 'Please accept privacy policy'),
  });

  return (
    <section className="h-full w-full bg-black text-white">
      <div className="m-4 md:m-10 lg:m-12 2xl:m-20 ">
        <h4 className='md:py-2 md:pb-14 md:text-3xl lg:text-5xl '>Contact Us</h4>
        <Formik
          initialValues={{ name: '', email: '', phone: '', project: '', privacy: false }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form>
              <div className="grid space-y-4 py-8">
                <div className='2xl:grid 2xl:grid-cols-2 2xl:gap-x-4 grid space-y-4 2xl:space-y-0 '>
                  <label htmlFor="name" className=" ">
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      className={`bg-transparent border-b border-gray-600 hover:border-b-[#F2AA4CFF] focus:outline-none ${touched.name && errors.name ? 'border-red-500' : ''}`}
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-xs" />
                  </label>
                  <label htmlFor="email">
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className={`bg-transparent border-b border-gray-600 hover:border-b-[#F2AA4CFF] focus:outline-none ${touched.email && errors.email ? 'border-red-500' : ''}`}
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
                  </label>
                </div>
                <div className='2xl:grid 2xl:grid-cols-2 2xl:gap-x-4  grid space-y-4 2xl:space-y-0'>
                  <label htmlFor="phone">
                    <Field
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                      className={`bg-transparent border-b border-gray-600 hover:border-b-[#F2AA4CFF]  focus:outline-none ${touched.phone && errors.phone ? 'border-red-500' : ''}`}
                    />
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-xs" />
                  </label>
                  <label htmlFor="project">
                    <Field
                      type="text"
                      id="project"
                      name="project"
                      placeholder="Project Info"
                      className={`bg-transparent border-b border-gray-600 hover:border-b-[#F2AA4CFF]  focus:outline-none ${touched.project && errors.project ? 'border-red-500' : ''}`}
                    />
                    <ErrorMessage name="project" component="div" className="text-red-500 text-xs" />
                  </label>
                </div>
              </div>
              <div className='lg:flex lg:gap-x-24 2xl:justify-between  lg:pb-10'>

              {/* File Attached */}
              
              <div className='flex gap-x-2 '>
                <div className='text-3xl text-yellow-300'>
                  <MdOutlineAttachFile />
                </div>
                <div>
                  <h6 className='text-base md:text-sm'>
                    Attached Your File
                  </h6>
                  <h6 className='text-gray-500 text-sm'>Up To 20MB</h6>
                </div>
              </div>
              {/* Privacy Policy */}
              <div className='flex flex-col py-8 md:py-5 lg:py-0'>
                <div>
                  <p className='text-xs text-gray-400 w-full'>
                    We will process your personal information in accordance with our <Link href="/Privacy" className='text-yellow-300'>Privacy Policy</Link>
                  </p>
                </div>
                {/* Checkbox */}
                <div className='flex gap-x-2'>
                  <Field type='checkbox' name='privacy' id='privacy' className={`rounded-lg ${touched.privacy && errors.privacy ? 'border-red-500' : ''}`} />
                  <label htmlFor='privacy' className='text-xs pt-2 text-gray-400'>I would like to be contacted with news and updates about your events and services</label>
                </div>
                <ErrorMessage name="privacy" component="div" className="text-red-500 text-xs" />
              </div>
              </div>
              {/* Button */}
              <div className=''>
                <button type="submit" disabled={isSubmitting} className='bg-gray-400 w-full p-2 '>Send Message</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default Contact;
