"use client";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import useRegisterModal from "../../hooks/useRegisterModal";
import axios from "axios";
import Modal from "./Modal";
import Heading from "../common/Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../common/Button";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    setIsLoading(true);

    console.log(values);

    try {
      const res = await axios.post("/api/register", values);

      if (res) {
        registerModal.onClose();
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const BodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subTitle="Create An Account!" />
      <Input
        register={register}
        errors={errors}
        id="email"
        label="Email"
        required
        disabled={isLoading}
      />
      <Input
        register={register}
        errors={errors}
        id="name"
        label="Name"
        required
        disabled={isLoading}
      />
      <Input
        register={register}
        errors={errors}
        id="password"
        type="password"
        label="Password"
        required
        disabled={isLoading}
      />
    </div>
  );

  const FooterContent = (
    <div className="flex flex-col gap-4 mt-2">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => alert("Sign with Gooogle")}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => alert("Sign with Github")}
      />
      <div className="text-neutral-500 text-center mt-2 font-light">
        Already have an account?{" "}
        <span
          className="text-neutral-800 hover:underline cursor-pointer ml-1"
          onClick={registerModal.onClose}
        >
          Log in
        </span>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="Continue"
      title="Register"
      body={BodyContent}
      footer={FooterContent}
    />
  );
};

export default RegisterModal;
