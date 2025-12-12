// components/Announcements.tsx

import React from 'react';
import Image from 'next/image';

// Estrutura de dados para os anúncios
const realAnnouncements = [
  {
    id: 1,
    title: "Reunião de Pais e Mestres (Ensino Médio)",
    date: "15/Dezembro",
    priority: "Urgente",
    color: "text-red-600 bg-red-100",
    icon: "/alert.png",
  },
  {
    id: 2,
    title: "Inscrições Abertas: Clube de Robótica",
    date: "Aberto até 20/Dezembro",
    priority: "Novo",
    color: "text-green-600 bg-green-100",
    icon: "/star.png",
  },
  {
    id: 3,
    title: "Prazo Final: Lançamento de Notas",
    date: "10/Janeiro",
    priority: "Importante",
    color: "text-blue-600 bg-blue-100",
    icon: "/info.png",
  },
  {
    id: 4,
    title: "Manutenção no Sistema SAGE",
    date: "Dia 05/Jan (00h às 06h)",
    priority: "Aviso",
    color: "text-yellow-600 bg-yellow-100",
    icon: "/warning.png",
  },
];

const Announcements: React.FC = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Avisos e Comunicados</h2>
      
      <div className="space-y-4">
        {realAnnouncements.map((announcement) => (
          <div 
            key={announcement.id} 
            className="flex gap-3 items-start border-b pb-4 last:border-b-0 last:pb-0"
          >
            {/* Ícone de Prioridade */}
            <div className={`p-2 rounded-full ${announcement.color}`}>
              {/* Usando um ícone simples, substitua por seu ícone real se necessário */}
              <Image src={announcement.icon} alt={announcement.priority} width={16} height={16} className="w-4 h-4" />
            </div>
            
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">{announcement.title}</h3>
              <p className="text-xs text-gray-500 mt-0.5">{announcement.date}</p>
              
              {/* Tag de Prioridade */}
              <span className={`inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full ${announcement.color}`}>
                {announcement.priority}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;