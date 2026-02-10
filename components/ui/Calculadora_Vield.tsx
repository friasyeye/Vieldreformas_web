import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { Check, ChevronRight, ChevronLeft, Minus, Plus } from 'lucide-react';

// --- CONSTANTS ---

const REFORMA_TYPES = [
    { id: 'baño', label: 'Reforma Baño', icon: '🚿' },
    { id: 'cocina', label: 'Reforma Cocina', icon: '🍽️' },
    { id: 'integral', label: 'Reforma Integral', icon: '🏠' },
] as const;

type ReformaType = typeof REFORMA_TYPES[number]['id'];

const WORK_OPTIONS: Record<ReformaType, string[]> = {
    baño: [
        'Cambiar suelo',
        'Alicatar paredes',
        'Sanitarios y muebles',
        'Electricidad y fontanería',
        'Cambiar ventana',
        'Puerta del baño',
        'Bañera o plato ducha',
        'Mampara',
    ],
    cocina: [
        'Cambiar suelo',
        'Alicatar paredes',
        'Muebles y encimera',
        'Electrodomésticos',
        'Isla de cocina',
        'Abrir al comedor',
        'Electricidad y fontanería',
        'Cambiar puerta',
        'Cambiar aluminio',
    ],
    integral: [
        'Reformar la cocina',
        'Pintar piso',
        'Abrir cocina al comedor',
        'Proyecto técnico',
        'Aire acondicionado',
        'Fontanería',
        'Cambiar suelo',
        'Quitar gotelé',
        'Tirar tabiques',
        'Calefacción',
        'Instalación eléctrica',
    ],
};

const getMeasurements = (type: ReformaType | null) => {
    if (type === 'baño') {
        return [
            { id: 'metros', label: '¿Qué superficie total tiene su baño?', min: 1, max: 25, step: 1, unit: 'm²' }
        ];
    }
    if (type === 'cocina') {
        return [
            { id: 'metros', label: '¿Qué superficie total tiene su cocina?', min: 1, max: 40, step: 1, unit: 'm²' }
        ];
    }
    // Default / Integral
    return [
        { id: 'metros', label: '¿Qué superficie total tiene su vivienda?', min: 0, max: 500, step: 5, unit: 'm²' },
        { id: 'baños', label: 'Baños a reformar', min: 0, max: 10, step: 1, unit: '' },
        { id: 'ventanas', label: 'Ventanas y puertas aluminio', min: 0, max: 20, step: 1, unit: '' },
        { id: 'puertas', label: 'Puertas de madera', min: 0, max: 20, step: 1, unit: '' },
    ];
};

// --- TYPES ---

interface CalculatorState {
    type: ReformaType | null;
    works: string[];
    measurements: Record<string, number>;
    contact: {
        name: string;
        phone: string;
    };
}

const INITIAL_STATE: CalculatorState = {
    type: null,
    works: [],
    measurements: {
        metros: 0,
        baños: 0,
        ventanas: 0,
        puertas: 0,
    },
    contact: {
        name: '',
        phone: '',
    },
};

// --- COMPONENT ---

export const Calculadora_Vield: React.FC = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<CalculatorState>(INITIAL_STATE);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load from LocalStorage
    useEffect(() => {
        const savedData = localStorage.getItem('vield_calculator_data');
        const savedStep = localStorage.getItem('vield_calculator_step');

        if (savedData) {
            try {
                setFormData(JSON.parse(savedData));
            } catch (e) {
                console.error("Error loading form data", e);
            }
        }

        if (savedStep) {
            setStep(parseInt(savedStep));
        }

        setIsLoaded(true);
    }, []);

    // Save to LocalStorage
    useEffect(() => {
        if (!isLoaded) return;
        localStorage.setItem('vield_calculator_data', JSON.stringify(formData));
        localStorage.setItem('vield_calculator_step', step.toString());
    }, [formData, step, isLoaded]);

    // --- HANDLERS ---

    const handleTypeSelect = (type: ReformaType) => {
        if (formData.type !== type) {
            // Reset works if type changes
            setFormData(prev => ({ ...prev, type, works: [] }));
        } else {
            setFormData(prev => ({ ...prev, type }));
        }
    };

    const toggleWorkOption = (option: string) => {
        setFormData(prev => {
            const works = prev.works.includes(option)
                ? prev.works.filter(w => w !== option)
                : [...prev.works, option];
            return { ...prev, works };
        });
    };

    const updateMeasurement = (id: string, increment: boolean, stepValue: number, min: number, max: number) => {
        setFormData(prev => {
            const current = prev.measurements[id] || 0;
            // Ensure we respect min/max limits
            let newValue = increment ? current + stepValue : current - stepValue;
            newValue = Math.max(min, Math.min(newValue, max));

            return {
                ...prev,
                measurements: { ...prev.measurements, [id]: newValue }
            };
        });
    };

    const handleContactChange = (field: keyof CalculatorState['contact'], value: string) => {
        setFormData(prev => ({
            ...prev,
            contact: { ...prev.contact, [field]: value }
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Lead listo para enviar:", formData);
        // Redirection disabled by request
    };

    // --- VALIDATION ---

    const canProceed = () => {
        switch (step) {
            case 1: return !!formData.type;
            case 2: return formData.works.length > 0;
            case 3: return true; // Measurements logic
            case 4: return formData.contact.name.trim().length >= 3 && formData.contact.phone.replace(/\s/g, '').length === 9;
            default: return false;
        }
    };

    // --- ANIMATIONS ---

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 20 : -20,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 20 : -20,
            opacity: 0,
        }),
    };

    if (!isLoaded) return null; // Prevent hydration mismatch or flash

    const currentMeasurements = getMeasurements(formData.type);

    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden">

            {/* HEADER & PROGRESS */}
            <div className="bg-stone-50 px-6 py-4 border-b border-stone-100 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-stone-400">
                    Paso {step} de 4
                </span>
                <div className="flex gap-2">
                    {[1, 2, 3, 4].map(s => (
                        <div
                            key={s}
                            className={`h-1.5 w-8 rounded-full transition-colors duration-300 ${s <= step ? 'bg-[#141317]' : 'bg-stone-200'}`}
                        />
                    ))}
                </div>
            </div>

            <div className="p-6 md:p-10 min-h-[400px] flex flex-col relative">
                <AnimatePresence mode='wait' initial={false}>
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="flex-grow flex flex-col"
                    >

                        {/* STEP 1: TYPE SELECTION */}
                        {step === 1 && (
                            <div className="flex flex-col h-full justify-center">
                                <h3 className="font-display font-bold text-2xl md:text-3xl text-stone-900 mb-8 text-center uppercase tracking-wide">
                                    ¿Qué tipo de reforma necesitas?
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {REFORMA_TYPES.map(type => (
                                        <button
                                            key={type.id}
                                            onClick={() => handleTypeSelect(type.id)}
                                            className={`
                        flex flex-col items-center justify-center p-8 rounded-xl border-2 transition-all duration-300
                        ${formData.type === type.id
                                                    ? 'border-[#141317] bg-stone-50 shadow-md transform scale-105'
                                                    : 'border-stone-100 hover:border-[#141317]/50 hover:bg-stone-50/50'}
                      `}
                                        >
                                            <span className="text-4xl mb-4">{type.icon}</span>
                                            <span className="font-display font-medium text-stone-900 uppercase tracking-widest text-sm">
                                                {type.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* STEP 2: WORK OPTIONS */}
                        {step === 2 && formData.type && (
                            <div className="flex flex-col h-full">
                                <h3 className="font-display font-bold text-2xl md:text-3xl text-stone-900 mb-8 text-center uppercase tracking-wide">
                                    Detalles de la {REFORMA_TYPES.find(t => t.id === formData.type)?.label}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {WORK_OPTIONS[formData.type].map(option => (
                                        <div
                                            key={option}
                                            onClick={() => toggleWorkOption(option)}
                                            className={`
                        flex items-center p-4 rounded-lg border cursor-pointer transition-all duration-200 select-none
                        ${formData.works.includes(option)
                                                    ? 'border-[#141317] bg-stone-50 shadow-sm'
                                                    : 'border-stone-100 hover:bg-stone-50'}
                      `}
                                        >
                                            <div className={`
                        w-6 h-6 rounded border flex items-center justify-center mr-4 transition-colors
                        ${formData.works.includes(option) ? 'bg-[#141317] border-[#141317] text-white' : 'border-stone-300 bg-white'}
                      `}>
                                                {formData.works.includes(option) && <Check size={14} strokeWidth={3} />}
                                            </div>
                                            {/* Removed input to rely solely on div click handler for better reliability */}
                                            <span className="text-stone-700 font-medium">{option}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* STEP 3: MEASUREMENTS */}
                        {step === 3 && (
                            <div className="flex flex-col h-full justify-center">
                                <h3 className="font-display font-bold text-2xl md:text-3xl text-stone-900 mb-8 text-center uppercase tracking-wide">
                                    ESPACIO A TRANSFORMAR
                                </h3>
                                <div className={`
                                    gap-8 mx-auto w-full
                                    ${currentMeasurements.length === 1 ? 'max-w-md flex flex-col' : 'grid grid-cols-1 md:grid-cols-2 max-w-2xl'}
                                `}>
                                    {currentMeasurements.map(m => (
                                        <div key={m.id} className="flex flex-col gap-3">
                                            <span className="text-xs font-bold uppercase tracking-widest text-stone-400">
                                                {m.label}
                                            </span>
                                            <div className="flex items-center justify-between bg-stone-50 rounded-lg p-2 border border-stone-200">
                                                <button
                                                    onClick={() => updateMeasurement(m.id, false, m.step, m.min, m.max)}
                                                    className="w-10 h-10 flex items-center justify-center rounded bg-white text-stone-600 shadow-sm hover:text-[#141317] active:scale-95 transition-all"
                                                >
                                                    <Minus size={18} />
                                                </button>
                                                <span className="font-display font-bold text-xl text-stone-900">
                                                    {formData.measurements[m.id] || 0} <span className="text-sm font-normal text-stone-400">{m.unit}</span>
                                                </span>
                                                <button
                                                    onClick={() => updateMeasurement(m.id, true, m.step, m.min, m.max)}
                                                    className="w-10 h-10 flex items-center justify-center rounded bg-white text-stone-600 shadow-sm hover:text-[#141317] active:scale-95 transition-all"
                                                >
                                                    <Plus size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* STEP 4: CONTACT */}
                        {step === 4 && (
                            <div className="flex flex-col h-full justify-center max-w-lg mx-auto w-full text-center">
                                <h3 className="font-display font-bold text-2xl md:text-4xl text-stone-900 mb-4 uppercase tracking-wide text-balance">
                                    ¡Casi lo tenemos!
                                </h3>
                                <p className="text-stone-500 mb-8">
                                    Déjanos tus datos para enviarte una estimación preliminar y contactarte si necesitamos afinar detalles.
                                </p>

                                <div className="space-y-6 text-left">
                                    <div className="group">
                                        <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2 font-bold group-hover:text-stone-900 transition-colors">Nombre Completo</label>
                                        <input
                                            type="text"
                                            value={formData.contact.name}
                                            onChange={(e) => handleContactChange('name', e.target.value)}
                                            className="w-full bg-stone-50 border border-stone-200 rounded-lg p-4 focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-all font-light text-lg"
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2 font-bold group-hover:text-stone-900 transition-colors">Teléfono</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                                <span className="text-stone-500 font-light text-lg">+34</span>
                                            </div>
                                            <input
                                                type="tel"
                                                value={formData.contact.phone}
                                                onChange={(e) => {
                                                    // Allow only numbers, max 9 digits, format with spaces
                                                    const raw = e.target.value.replace(/\D/g, '').slice(0, 9);
                                                    const formatted = raw.replace(/(\d{3})(?=\d)/g, '$1 ');
                                                    handleContactChange('phone', formatted);
                                                }}
                                                className="w-full bg-stone-50 border border-stone-200 rounded-lg p-4 pl-14 focus:outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-all font-light text-lg"
                                                placeholder="000 000 000"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </motion.div>
                </AnimatePresence>

                {/* FOOTER ACTIONS */}
                <div className="mt-12 pt-6 border-t border-stone-100 flex justify-between items-center bg-white z-10">
                    {step > 1 ? (
                        <button
                            onClick={() => setStep(step - 1)}
                            className="flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors font-medium text-sm uppercase tracking-widest"
                        >
                            <ChevronLeft size={16} />
                            Atrás
                        </button>
                    ) : (
                        <div></div> // Spacer
                    )}

                    {step < 4 ? (
                        <Button
                            onClick={() => canProceed() && setStep(step + 1)}
                            disabled={!canProceed()}
                            className={`
                        !px-5 !py-3 !text-xs md:!px-8 md:!text-sm flex items-center gap-2 !bg-[#141317] !text-white hover:!bg-stone-800
                        ${!canProceed() ? 'opacity-50 cursor-not-allowed grayscale' : ''}
                    `}
                        >
                            Siguiente
                            <ChevronRight size={16} />
                        </Button>
                    ) : (
                        <Button
                            onClick={(e) => canProceed() && handleSubmit(e)}
                            disabled={!canProceed()}
                            className={`
                        !px-5 !py-3 !text-xs md:!px-8 md:!text-sm !bg-[#141317] !text-white hover:!bg-stone-800 shadow-lg hover:shadow-xl
                        ${!canProceed() ? 'opacity-50 cursor-not-allowed grayscale' : ''}
                    `}
                        >
                            VER PRESUPUESTO
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};
