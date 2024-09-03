import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import styles from "./Form.module.css";

interface FormData {
  name: string;
  lastname: string;
  gender: "male" | "female";
  password: string;
  confirmpassword: string;
  terms: boolean;
}

const schema = zod
  .object({
    name: zod.string().min(1, "Este campo é obrigatório!"),
    lastname: zod.string().min(1, "Este campo é obrigatório!"),
    gender: zod.enum(["male", "female"]),
    password: zod.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmpassword: zod
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres"),
    terms: zod.boolean().refine((value) => value === true, {
      message: "Você deve aceitar os termos e condições",
    }),
  })
  .refine((data) => data.confirmpassword === data.password, {
    message: "A senhas não conferem!",
    path: ["confirmpassword"],
  });

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <div>
      <form
        className={styles.form}
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <input
          type="text"
          {...register("name")}
          placeholder="Digite o seu nome"
        />
        {errors.name && (
          <p className={styles.error_msg}>{errors.name.message}</p>
        )}

        <input
          type="text"
          {...register("lastname")}
          placeholder="Digite o seu sobrenome"
        />
        {errors.lastname && (
          <p className={styles.error_msg}>{errors.lastname.message}</p>
        )}

        <select {...register("gender")} defaultValue="male">
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="no_binary">Não binário</option>
          <option value="female">Outros</option>
        </select>
        {errors.gender && (
          <p className={styles.error_msg}>{errors.gender.message}</p>
        )}
        <input
          type="password"
          {...register("password")}
          placeholder="Insira a sua senha"
        />
        {errors.password && (
          <p className={styles.error_msg}>{errors.password.message}</p>
        )}

        <input
          type="password"
          {...register("confirmpassword")}
          placeholder="Confirme a sua senha"
        />
        {errors.confirmpassword && (
          <p className={styles.error_msg}>{errors.confirmpassword.message}</p>
        )}

        <label>
          <input type="checkbox" {...register("terms")} />
          Aceito os termos e condições
        </label>
        {errors.terms && (
          <p className={styles.error_msg}>{errors.terms.message}</p>
        )}

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Form;
