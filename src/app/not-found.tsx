import { Redirect } from '@/components';
import Link from 'next/link';

export default function NotFound() {
    return (
<main className="h-screen w-full flex flex-col justify-center items-center text-slate-900">
	<h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
	<div className="bg-[#79b7ca] px-2 text-sm rounded rotate-12 absolute">
		Page Not Found
	</div>

<div className='mt-10'>
    <Redirect path="/dashboard/main" title="Inicio" />
</div>

</main>
    )
}