import { Button } from "../../ui/components/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/components/Card";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <section className="flex flex-col w-full items-center justify-center min-h-[80vh]">
      <Card className="w-[350px] shadow-md">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            variant="outline"
            className="flex w-full items-center justify-center gap-3 transition-all hover:bg-slate-300"
          >
            <FcGoogle size={25} />
            <div className="text-xl font-light">Sign In by Google</div>
          </Button>
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </section>
  );
}
