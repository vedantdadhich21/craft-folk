import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

 

export default function Home() {
 return(
  <div className="p-3">

    <Button variant="elevated" className="border-4" > IM Batman</Button>
    <Progress value="50.5"></Progress>
    <Input placeholder="IM THE MUSIC"></Input>

  </div>
 );
}
