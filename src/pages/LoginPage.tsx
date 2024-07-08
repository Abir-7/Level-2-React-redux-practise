import { Button } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/feature/auth/authSlice";
import { decodeToken } from "../utils/decodeToken";

interface ILonginData {
  id: string;
  password: string;
}

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<ILonginData>();
  const [loginFunction] = useLoginMutation();
  const onSubmit: SubmitHandler<ILonginData> = async (data) => {
    //console.log(data);
    const res = await loginFunction(data).unwrap();
    console.log(res);
    const userData = decodeToken(res.data.accessToken);
    console.log(userData);
    dispatch(setUser({ user: userData, token: res.data.accessToken }));
  };
  //  console.log(data, isError, isLoading);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" {...register(`id`)} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            {...register(`password`)}
            required
          />
        </div>
        <Button htmlType="submit">Submit</Button>
      </form>
    </div>
  );
};

export default LoginPage;
