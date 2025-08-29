import Input from "../Elements/Input";
import Button from "../Elements/Button";

const RegiesterForm = () => {
    return (
        <form action="">
          <Input 
            text="Email" 
            htmlFor="email" 
            type="email"
            placeholder="example@mail.com">
          </Input>

          <Input
            text="First Name" 
            htmlFor="firstName" 
            type="text"
            placeholder="John">
          </Input>

          <Input
            text="Last Name" 
            htmlFor="lastName" 
            type="text"
            placeholder="Doe">
          </Input>

          <Input
            text="Password" 
            htmlFor="password" 
            type="password"
            placeholder="****">
          </Input>

          <Input
            text="Re-type password" 
            htmlFor="passwordReType" 
            type="password"
            placeholder="****">
          </Input>
          <Button text="Regiester Now!"></Button>
        </form>
    )
}

export default RegiesterForm;