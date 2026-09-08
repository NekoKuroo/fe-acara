import { Button, Card, CardBody, Input, Link } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import useRegister from "./useRegister";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Register = () => {
        const {visiblePassword, handleVisiblePassword} = useRegister();
    return (
        <div className="flex w-full flex-col lg:flex-row items-center gap-10 justify-center lg:gap-20 p-8">
            <div className="flex w-fulllg:w-1/3 flex-col items-center justify-center gap-10">
                <Image
                    src="/images/general/logo.svg"
                    alt="Register"
                    width={180}
                    height={180}
                />
                <Image
                    src="/images/illustrations/login.svg"
                    alt="Register"
                    className="w-full"
                    width={400}
                    height={400}
                />
            </div>
                <Card>
                    <CardBody className="p-8">
                        <h2 className="text-xl font-bold text-danger-500">Create Account</h2>
                        <p className="text-small mb-4">
                            Have an account?&nbsp;
                            <Link href="/login" className="font-semibold text-danger-400">
                            Login Here</Link>
                        </p>
                        <form className="flex w-80 flex-col gap-4">
                            <Input type="text" label="Fullname" variant="bordered" autoComplete="off"/>
                            <Input type="email" label="Email" variant="bordered" autoComplete="off"/>
                            <Input type={visiblePassword.password ? 'text' : 'password'} label="Password" variant="bordered" required autoComplete="off" 
                                endContent={
                                <button className="focus:outline-none"
                                type="button"
                                onClick={() => handleVisiblePassword("password")}>
                                    {visiblePassword.password ? 
                                    <FaEye className="text-xl text-default pointer-events-none"/> : 
                                    <FaEyeSlash className="text-xl text-default pointer-events-none" />}
                                </button>
                            }/>
                            <Input type={visiblePassword.passwordConfirmation ? 'text' : 'password'} label="Password Confirmation" variant="bordered" required autoComplete="off" 
                                endContent={
                                <button className="focus:outline-none"
                                type="button"
                                onClick={() => handleVisiblePassword("passwordConfirmation")}>
                                    {visiblePassword.passwordConfirmation ? 
                                    <FaEye className="text-xl text-default pointer-events-none"/> : 
                                    <FaEyeSlash className="text-xl text-default pointer-events-none" />}
                                </button>
                            }/>
                            <Button color="danger" size="lg" type="submit">Register</Button>
                        </form>
                    </CardBody>
                </Card>
        </div>
    );
};

export default Register;