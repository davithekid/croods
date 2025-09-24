"use client";

import { useState } from "react";
import { PlusCircleIcon, Edit2Icon, Trash2Icon } from "lucide-react";

export default function CardFolgas() {
  const [folgas, setFolgas] = useState([]);
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleAddFolga = () => {
    if (!date || !reason) return;
    const newFolga = { id: Date.now(), date, reason };
    setFolgas([...folgas, newFolga]);
    setDate("");
    setReason("");
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setFolgas(folgas.filter((f) => f.id !== id));
  };

  const handleEdit = (id) => {
    const folga = folgas.find((f) => f.id === id);
    if (!folga) return;
    setDate(folga.date);
    setReason(folga.reason);
    setShowForm(true);
    handleDelete(id);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      {/* Card principal */}
      <div className="p-6 rounded-2xl shadow-md border">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Gerenciar Folgas</h2>
          <button
            className="px-4 py-2 rounded-lg flex items-center gap-2 border hover:shadow-md transition"
            onClick={() => setShowForm(!showForm)}
          >
            <PlusCircleIcon className="w-5 h-5" />
            {showForm ? "Cancelar" : "Adicionar"}
          </button>
        </div>

        {/* Formulário expandido */}
        {showForm && (
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <input
              type="date"
              className="border rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-accent/50"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="text"
              className="border rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-accent/50"
              placeholder="Motivo da folga"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
            <button
              className="px-6 py-2 rounded-lg flex items-center gap-2 border hover:shadow-md transition"
              onClick={handleAddFolga}
            >
              <PlusCircleIcon className="w-5 h-5" />
              Salvar
            </button>
          </div>
        )}
      </div>

      {/* Lista de folgas cadastradas */}
      <div className="grid gap-4">
        {folgas.map((folga) => (
          <div
            key={folga.id}
            className="p-4 rounded-xl border shadow-sm hover:shadow-md transition flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{folga.date}</p>
              <p className="text-sm">{folga.reason}</p>
            </div>
            <div className="flex gap-2">
              <button
                className="p-2 rounded-lg border hover:shadow transition"
                onClick={() => handleEdit(folga.id)}
              >
                <Edit2Icon className="w-4 h-4" />
              </button>
              <button
                className="p-2 rounded-lg border hover:shadow transition"
                onClick={() => handleDelete(folga.id)}
              >
                <Trash2Icon className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
