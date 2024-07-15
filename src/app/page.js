import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import Link from 'next/link'


export default function Home() {

  

  return (
    <main className="min-h-screen justify-between bg-neutral-950">
      <div className="flex items-center h-[100vh]">
        <h1 className="text-neutral-200 text-6xl font-semibold m-[250px] mx-[550px] text-shadow-pop-tr">Drxco</h1>
      </div>
      <div className="py-[200px]">
        <Card className="text-neutral-200 bg-transparent w-[500px] mx-[400px] jello-horizontal">
          <CardHeader>
            <CardTitle>Hello, I'am Drxco</CardTitle>
            <CardDescription>Full stack developer | UI/UIX designer</CardDescription>
          </CardHeader>
          <CardContent>
            <p>I am a junior fullstack developer. I have 5 years of experience in the world of programming. I started programming video games, that's why I liked this wonderful world. I am currently a freelancer. I am from Valencia, Spain and this is my wonderful portfolio.</p>
          </CardContent>
          <CardFooter>
            <p>Create with ❤</p>
          </CardFooter>
        </Card>
        <Card className="text-neutral-200 bg-transparent w-[850px] mx-[200px] my-[100px]">
          <CardHeader>
            <CardTitle>GitHub stats</CardTitle>
          </CardHeader>
          <CardContent className="flex">
            <img className="mr-[20px]" src="https://github-readme-stats.vercel.app/api?username=drxcodev&show_icons=true&theme=radical" alt="" />
            <img className="mr-[20px]" src="https://github-readme-stats.vercel.app/api/top-langs/?username=drxcodev&show_progress=true&theme=radical" alt="" />
          </CardContent>
        </Card>
      </div>
      <h1 className="text-neutral-200 text-4xl font-semibold py-[150px] mx-[600px] focus-in-expand">Projects</h1>
      <div className="flex mx-[150px] pb-[50px]">
      <Card className="text-neutral-200 bg-transparent w-[500px] mx-[50px] shadow-pop-tr ">
          <CardHeader>
            <CardTitle>Optimus</CardTitle>
            <CardDescription>Javascript framework</CardDescription>
          </CardHeader>
          <CardContent>
            <p id="repo-description">Fast framework for you web, utilizing JavaScript.</p>
            <div className="flex w-[450px]">
              <img className="mt-[20px] rounded-lg" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NODE" />
              <img className="mt-[20px] rounded-lg mx-[20px]" src="https://img.shields.io/badge/Pug-FFF?style=for-the-badge&logo=pug&logoColor=A86454" alt="PUG" />
              <img className="mt-[20px] rounded-lg mx-[20px]" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JS" />

            </div>
            <div className="flex mt-[10px]">
              <img className="rounded-lg" src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" alt="NPM" />
              <img className="rounded-lg mx-[20px]" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor" alt="HTML" /> 
            </div>
          </CardContent>
          <CardFooter className="mt-[10px]">
          <Button asChild>
            <Link href="https://github.com/DrxcoDev/Optimus/tree/main">GitHub</Link>
          </Button>



          </CardFooter>
        </Card>
        
      </div>
    </main>
  );
}
