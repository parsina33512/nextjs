import Link from "next/link";

const page = () => {
  return (
    <div>
        <h1>DASHBOARD USERS</h1>
             <ul className="mt-10">
                <li><link href="/dashboard/users/1"></link></li>
                <li><link href="/dashboard/users/2"></link></li>
                <li><link href="/dashboard/users/3"></link></li>
                <li><link href="/dashboard/users/4"></link></li>
                <li><link href="/dashboard/users/5"></link></li>                                    
             </ul>
    </div>
  )
}

export default page