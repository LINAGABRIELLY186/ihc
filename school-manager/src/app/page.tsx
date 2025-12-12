import Link from "next/link";
// Assumindo que seus componentes já existem em @/components
import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
// Se houver outros componentes no seu projeto, importe-os aqui:
// import FinanceChart from "@/components/FinanceChart"; 

// --- Mocks para os Cards de Estatísticas ---
interface QuickAccessProps {
  title: string;
  metric: string;
  description: string;
  link: string;
}

const QuickAccessCard: React.FC<QuickAccessProps> = ({ title, metric, description, link }) => (
  <Link href={link} className="bg-white p-5 rounded-lg shadow-md flex flex-col justify-between h-32 w-full md:w-[31%] transition hover:shadow-lg hover:ring-2 ring-primary-blue">
    <h3 className="text-sm font-medium text-gray-500">{title}</h3>
    <p className="text-3xl font-bold text-primary-blue">{metric}</p>
    <span className="text-xs text-gray-400">{description}</span>
  </Link>
);

const HomePage = () => {
    return (
        // Estrutura principal da Home Page - mantém o layout 2/3 (esquerda) + 1/3 (direita)
        <div className="p-4 flex gap-4 flex-col lg:flex-row">
            
            {/* ESQUERDA (Área Principal - 2/3) */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                
                {/* 1. CARDS DE ACESSO RÁPIDO / ESTATÍSTICAS */}
                <div className="flex gap-4 justify-between flex-wrap">
                    <QuickAccessCard 
                      title="Total de Alunos" 
                      metric="1,540" 
                      description="Acesse lista completa" 
                      link="/student"
                    />
                    <QuickAccessCard 
                      title="Total de Professores" 
                      metric="95" 
                      description="Acesse lista completa" 
                      link="/teacher"
                    />
                    <QuickAccessCard 
                      title="Turmas Ativas" 
                      metric="42" 
                      description="Acesse grades horárias" 
                      link="/admin"
                    />
                </div>
                
                {/* 2. GRÁFICO PRINCIPAL: Frequência/Presença */}
                <div className="bg-white rounded-lg p-5 shadow-md h-[500px]">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Frequência Geral dos Alunos</h2>
                    {/* Componente que você já possui */}
                    <AttendanceChart /> 
                </div>

                {/* 3. GRÁFICO SECUNDÁRIO: Contagem/Distribuição */}
                <div className="bg-white rounded-lg p-5 shadow-md h-[400px]">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Distribuição por Cursos</h2>
                    {/* Componente que você já possui */}
                    <CountChart />
                </div>
            </div>
            
            {/* DIREITA (Sidebar de Widgets - 1/3) */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
                
                {/* 4. WIDGET DE ANÚNCIOS */}
                {/* Componente que você já possui */}
                <Announcements /> 
                
                {/* 5. WIDGET DE TAREFAS/ATALHOS */}
                <div className="bg-white p-5 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Atalhos Administrativos</h2>
                    <div className="flex flex-col gap-3">
                        <Link href="/reports/finance" className="p-3 bg-light-red text-primary-red font-medium rounded-md hover:opacity-90 transition">
                            Gerar Relatório Financeiro
                        </Link>
                        <Link href="/users/add" className="p-3 bg-light-blue text-primary-blue font-medium rounded-md hover:opacity-90 transition">
                            Adicionar Novo Usuário
                        </Link>
                        <Link href="/settings" className="p-3 bg-gray-100 text-gray-700 font-medium rounded-md hover:opacity-90 transition">
                            Configurações do Sistema
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;