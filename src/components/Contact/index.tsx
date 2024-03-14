"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FileAttch from "@/public.icons/paperclip-icon.svg";
import { Button } from "../ui/button";

const Data = [
  {
    htmlfor: "name",
    type: "text",
    id: "name",
    name: "name",
    placeholder: "Name",
    errname: "name",
  },
  {
    htmlfor: "email",
    type: "email",
    id: "email",
    name: "email",
    placeholder: "Email",
    errname: "email",
  },
  {
    htmlfor: "phone",
    type: "tel",
    id: "phone",
    name: "phone",
    placeholder: "Phone",
    errname: "phone",
  },
  {
    htmlfor: "project",
    type: "text",
    id: "project",
    name: "project",
    placeholder: "Project Info",
    errname: "project",
  },
];

const Contact = () => {
  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    project: Yup.string().required("Project info is required"),
    privacy: Yup.boolean().oneOf([true], "Please accept privacy policy"),
  });

  return (
    <section
      className="h-full lg:h-screen lg:py-32 w-full bg-black text-white"
      style={{ backgroundImage: `url(/images/ContactUsImage.webp)` }}
    >
      <div className="p-3 py-6">
        <h4 className="font-bold text-2xl lg:text-5xl">Contact Us</h4>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            project: "",
            privacy: false,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form>
              <div className="pt-8">
                <div className="gap-2 grid pt-4 lg:grid-cols-2 lg:gap-x-8">
                  {Data.map((x) => (
                    <div key={x.id} className="pt-4">
                      <label htmlFor={x.htmlfor} className=" ">
                        <Field
                          type={x.type}
                          id={x.id}
                          name={x.name}
                          placeholder={x.placeholder}
                          className={`bg-transparent  hover:border-b-[#F2AA4CFF]  focus:outline-none ${
                            touched.name && errors.name ? "border-red-500" : ""
                          }`}
                        />
                      </label>

                      <div className="w-full h-[1px] mt-4 bg-gray-600"></div>
                      <ErrorMessage
                        name={x.errname}
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:flex md:gap-10 lg:justify-between">
                {/* File Attached */}

                <div className="flex gap-x-2 pt-4 items-center">
                  <div className="">
                    <FileAttch className="h-6 w-6" />
                  </div>
                  <div>
                    <h6 className="text-base md:text-sm">Attach your file</h6>
                    <h6 className="text-gray-500 text-sm">Up to 20MB</h6>
                  </div>
                </div>
                {/* Privacy Policy */}
                <div className="flex flex-col py-8 md:py-5">
                  <div>
                    <p className="text-xs text-gray-500 w-full">
                      We will process your personal information in accordance
                      with our{" "}
                      <Link
                        href="/Privacy"
                        className="text-yellow-400 cursor-pointer"
                      >
                        Privacy Policy
                      </Link>
                    </p>
                  </div>
                  {/* Checkbox */}
                  <div className="flex gap-x-2 items-center">
                    <Field
                      type="checkbox"
                      name="privacy"
                      id="privacy"
                      className={`rounded-lg ${
                        touched.privacy && errors.privacy ? "border-red" : ""
                      }`}
                    />
                    <label
                      htmlFor="privacy"
                      className="text-xs pt-2 text-gray-500"
                    >
                      I would like to be contacted with news and updates about
                      your events and services
                    </label>
                  </div>
                  <ErrorMessage
                    name="privacy"
                    component="div"
                    className="text-red text-xs"
                  />
                </div>
              </div>
              {/* Button */}
              <div className="grid pt-10">
                <Button
                  variant="default"
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                >
                  Send Message
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Contact;
