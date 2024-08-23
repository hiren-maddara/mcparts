"use client";

// import { useState } from "react";
// import { Mail, Eye, EyeOff, Lock } from "lucide-react";
// import Link from "next/link";

// function Login() {
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     // <div className="flex min-h-screen bg-white">
//     //   <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
//     //     <div className="mx-auto w-full max-w-sm">
//     //       <h2 className="mt-6 text-3xl font-extrabold leading-9 text-gray-900">
//     //         Motorcraft Parts
//     //       </h2>
//     //       <h2 className="text-xl font-semibold leading-9 text-gray-600">
//     //         Welcome back
//     //       </h2>

//     //       <div className="mt-8">
//     //         <div className="mt-6">
//     //           <form action="#" method="POST">
//     //             <div className="mt-1 rounded-md shadow-sm relative flex items-center">
//     //               <input
//     //                 id="email"
//     //                 type="email"
//     //                 required
//     //                 className="focus:shadow-outline-blue block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out focus:border-blue-300 focus:outline-none sm:text-sm sm:leading-5 pl-10 pr-4"
//     //                 placeholder="Email"
//     //               />
//     //               <Mail className="text-gray-600 absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400 h-4 w-4" />
//     //             </div>

//     //             <div className="mt-4 rounded-md shadow-sm relative flex items-center">
//     //               <input
//     //                 id="password"
//     //                 type={showPassword ? "text" : "password"}
//     //                 required
//     //                 value={password}
//     //                 onChange={(e) => setPassword(e.target.value)}
//     //                 className="text-gray-600 focus:shadow-outline-blue block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out focus:border-blue-300 focus:outline-none sm:text-sm sm:leading-5 pl-10 pr-4"
//     //                 placeholder="Password"
//     //               />
//     //               <Lock className=" h-4 w-4 text-gray-600 absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400" />
//     //               <button
//     //                 onClick={(e) => {
//     //                     e.preventDefault()
//     //                     setShowPassword(!showPassword)
//     //                 }}
//     //                 className="cursor-default absolute right-2 text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
//     //               >
//     //                 {!showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//     //               </button>
//     //             </div>

//     //             <div className="mt-6 flex items-center justify-between">
//     //               <div className="flex items-center">
//     //                 <input
//     //                   id="remember_me"
//     //                   type="checkbox"
//     //                   className="form-checkbox h-4 w-4 text-indigo-600 border-gray-500 transition duration-150 ease-in-out"
//     //                 />
//     //                 <label
//     //                   htmlFor="remember_me"
//     //                   className="ml-2 block text-sm leading-5 text-gray-500"
//     //                 >
//     //                   {" "}
//     //                   Remember me{" "}
//     //                 </label>
//     //               </div>

//     //               <div className="text-sm leading-5">
//     //                 <a
//     //                   href="#"
//     //                   className="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:underline focus:outline-none"
//     //                 >
//     //                   {" "}
//     //                   Forgot your password?{" "}
//     //                 </a>
//     //               </div>
//     //             </div>

//     //             <div className="mt-6">
//     //               <span className="block w-full rounded-md shadow-sm">
//     //                 <Link
//     //                   href={"/dashboard"}
//     //                   className="focus:shadow-outline-indigo flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:border-indigo-700 focus:outline-none active:bg-indigo-700"
//     //                 >
//     //                   Sign in
//     //                 </Link>
//     //               </span>
//     //             </div>
//     //           </form>
//     //         </div>
//     //         <p className=" text-gray-600 text-sm mt-4">
//     //           If you do not have an account, you are unable to create one
//     //           byself. An admin is responsible for creating new users
//     //         </p>
//     //       </div>
//     //     </div>
//     //   </div>

//     //   <div className="relative hidden w-0 flex-1 lg:block">
//     //     <img
//     //       className="absolute inset-0 h-full w-full object-cover"
//     //       src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
//     //       alt=""
//     //     />
//     //   </div>
//     // </div>

//   );
// }

// export default Login;

import { useState } from "react";
import { Mail, Eye, EyeOff, Lock } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-screen h-screen lg:flex items-center justify-center p-12 ">
      <div className="w-full h-full lg:w-1/2 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-extrabold leading-9">Motorcraft Parts</h2>
        <h2 className="text-xl font-semibold leading-9 mb-3">Welcome back</h2>

        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Link href={"/dashboard"}>
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link href={"/dashboard"}>
                <Button variant="outline" className="w-full">
                  Login with one time pin
                </Button>
              </Link>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="#" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="relative hidden flex-1 lg:block lg:w-1/2 border h-full">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
