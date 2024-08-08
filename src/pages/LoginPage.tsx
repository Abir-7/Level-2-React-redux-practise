import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/feature/auth/authSlice";
import { decodeToken } from "../utils/decodeToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PhFrom from "../components/form/PhFrom";
import PhFormInput from "../components/form/PhFormInput";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [loginFunction] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("Loading.....");
    try {
      const res = await loginFunction(data).unwrap();
      const userData = decodeToken(res.data.accessToken);
      dispatch(setUser({ user: userData, token: res.data.accessToken }));

      console.log(res);
      navigate("/");
      toast.success("Login Successfull", { id: toastId, duration: 1000 });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.data.message) {
        toast.error(error.data.message, { id: toastId, duration: 1000 });
      } else {
        toast.error("Something went wrong", { id: toastId, duration: 1000 });
      }
    }
  };

  const defaultValues = {
    id: "A-0001",
    password: "admin123",
  };

  return (
    <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
      <PhFrom onSubmit={onSubmit} defaultValues={defaultValues}>
        <PhFormInput label="ID:" type={"text"} name={"id"}></PhFormInput>

        <PhFormInput
          label="Password:"
          type={"password"}
          name={"password"}
        ></PhFormInput>

        <Button htmlType="submit">Submit</Button>
      </PhFrom>
    </Row>
  );
};

export default LoginPage;
