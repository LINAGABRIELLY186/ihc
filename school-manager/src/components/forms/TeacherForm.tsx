"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username deve conter pelo menos 3 caracteres!" })
    .max(12, { message: "Username deve ter no máximo 12 caracteres!" }),
  email: z.string().email({ message: "Endereço de email inválido!" }),
  password: z
    .string()
    .min(8, { message: "Senha deve conter pelo menos 8 caracteres!" }),
  firstName: z.string().min(1, { message: "Nome é  obrigatório!" }),
  lastName: z.string().min(1, { message: "Sobrenome é obrigatório!" }),
  phone: z.string().min(1, { message: "Telefone é obrigatório!" }),
  address: z.string().min(1, { message: "Endereço é obrigatório!" }),
  bloodType: z.string().min(1, { message: "Tipo sanguíneo é obrigatório!" }),
  birthday: z.date({ message: "Data de nascimento é obrigatória!" }),
  sex: z.enum(["male", "female"], { message: "O sexo é obrigatório!" }),
  img: z.instanceof(File, { message: "Imagem de perfil é obrigatória!" }),
});

type Inputs = z.infer<typeof schema>;

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Criar um novo Professor</h1>
      <span className="text-xs text-gray-400 font-medium">
        Informações de Autenticação
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors?.username}
        />
        <InputField
          label="Email"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
        />
        <InputField
          label="Senha"
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors?.password}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Informações Pessoais
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Nome"
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors.firstName}
        />
        <InputField
          label="Sobrenome"
          name="lastName"
          defaultValue={data?.lastName}
          register={register}
          error={errors.lastName}
        />
        <InputField
          label="Telefone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        <InputField
          label="Endereço"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        <InputField
          label="Tipo Sanguíneo"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors.bloodType}
        />
        <InputField
          label="Data de Nascimento"
          name="birthday"
          defaultValue={data?.birthday}
          register={register}
          error={errors.birthday}
          type="date"
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Sexo</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("sex")}
            defaultValue={data?.sex}
          >
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-400">
              {errors.sex.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="img"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Enviar foto</span>
          </label>
          <input type="file" id="img" {...register("img")} className="hidden" />
          {errors.img?.message && (
            <p className="text-xs text-red-400">
              {errors.img.message.toString()}
            </p>
          )}
        </div>
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Criar" : "Atualizar"}
      </button>
    </form>
  );
};

export default TeacherForm;