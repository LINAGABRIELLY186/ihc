// app/admin/page.tsx
import { UserButton } from "@clerk/nextjs";

const AdminDashboard = () => {
  return (
    <div className='p-8'>
      <div className="flex justify-between items-center">
        <h1 className='text-3xl font-bold text-primary-blue'>
          Dashboard: ADMINISTRADOR
        </h1>
        {/* Botão de Logout do Clerk */}
        <UserButton afterSignOutUrl="/" />
      </div>
      <p className='mt-4'>Você acessou esta rota porque tem a role 'admin'.</p>
    </div>
  )
}
export default AdminDashboard