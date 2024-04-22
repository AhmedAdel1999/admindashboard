import Header from "../components/header";
import { Formik, Form, Field , ErrorMessage } from 'formik';
import * as Yup from "yup";

const FormPage = () =>{

    const regEmail =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegExp =/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

    const data = [
        {value: "Admin",label: "Admin"},
        {value: "Manger",label: "Manger"},
        {value: "User",label: "User"},
    ];
    const schema = () =>{
        const schema = Yup.object().shape({
          firstName:Yup.string().min(3, 'Too Short!').required("Required"),
          lastName:Yup.string().min(3, 'Too Short!').required("Required"),
          email:Yup.string().email("Please provide a valid email address").matches(regEmail).required("Required"),
          ContactNumber:Yup.string().matches(phoneRegExp).required("Required"),
        })
        return schema
    }

    const onSubmit = () => {
        console.log("doneeeeeeeeeeee");
    };

    return(
        <div className="h-full px-5 py-7">
            <Header title="CREATE USER" subTitle="Create a New User Profile" />
            <Formik 
            initialValues={{
                firstName:"",
                lastName:"",
                email:"",
                ContactNumber:"",
                Adress1:"",
                Adress2:"",
                role:""
            }}
            onSubmit={onSubmit}
            validationSchema={schema}
          >
            <Form className="flex flex-col pb-5 gap-5">

              <div className="flex flex-wrap gap-5">
                <div className="flex flex-col gap-1 grow min-w-[250px]">
                    <Field className="inputstyle" type="text" name="firstName" placeholder="First Name" />
                    <ErrorMessage className="text-red-900 font-bold" name="firstName" component="span" />
                </div>

                <div className="flex flex-col gap-1 grow min-w-[250px]">
                    <Field className="inputstyle" type="text" name="lastName" placeholder="Last Name" />
                    <ErrorMessage className="text-red-900 font-bold" name="lastName" component="span" />
                </div>
              </div>
              
              <div className="flex flex-col gap-1">
                <Field className="inputstyle" type="email" name="email" placeholder="Email" />
                <ErrorMessage className="text-red-900 font-bold" name="email" component="span" />
              </div>

              <div className="flex flex-col gap-1">
                <Field className="inputstyle" type="text" name="ContactNumber" placeholder="Contact Number" />
                <ErrorMessage className="text-red-900 font-bold" name="ContactNumber" component="span" />
              </div>

              <div>
                <Field className="inputstyle w-full" type="text" name="Adress1" placeholder="Adress1" />
              </div>

              <div>
                <Field className="inputstyle w-full" type="text" name="Adress2" placeholder="Adress1" />
              </div>

              <div>
                <select className="inputstyle w-full" defaultValue={"User"}>
                    {
                        data.map((option)=>{
                            return(
                                <option key={option.value} value={option.value}>{option.label}</option>
                            )
                        })
                    }
                </select>
              </div>

              <div className="flex justify-end">
                <button 
                 type="submit"
                 className="bg-[#1976b2] dark:bg-[#90caf9] dark:text-black text-white w-fit px-2 py-2 text-lg border-none outline-none rounded-md"
                >
                   Create New User
                </button>
              </div>

            </Form>
          </Formik>
        </div>
    )
}
export default FormPage;