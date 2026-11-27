// Verificaciones individuales en el orden del banco activo.
{
  const reviews = [
  {
    "originalId": "abril-2022:82",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "Para los primeros tres meses, la OMS recomienda entre 14 y 17 horas de sueño por cada 24 horas, incluidas las siestas. El intervalo orienta el cuidado de un recién nacido sano.",
    "o": {
      "A": "Diez a doce horas queda por debajo del intervalo recomendado a esta edad.",
      "B": "Doce a trece horas tampoco alcanza el límite inferior de la recomendación.",
      "C": "Ocho a diez horas es una duración marcadamente menor que la esperable."
    },
    "src": "OMS · Actividad física, comportamiento sedentario y sueño en menores de 5 años, grupo de 0 a 3 meses",
    "src_url": "https://iris.who.int/bitstream/handle/10665/311664/9789241550536-eng.pdf?sequence=1",
    "stem": "Juan tiene cinco días, se despierta para alimentarse y su examen es normal. Según la OMS, ¿qué duración total de sueño se recomienda en 24 horas, incluidas las siestas?",
    "options": [
      "10 a 12 horas",
      "12 a 13 horas",
      "8 a 10 horas",
      "14 a 17 horas"
    ]
  },
  {
    "originalId": "abril-2022:83",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "El aspecto de mejillas abofeteadas y el exantema reticulado que reaparece con el calor sugieren eritema infeccioso. En un niño inmunocompetente que se siente bien, el período de mayor contagio precede al exantema y puede volver hoy a la escuela.",
    "o": {
      "A": "El exantema puede reaparecer durante semanas. Su desaparición no determina el regreso.",
      "C": "No se indica esperar siete días desde la aparición de las lesiones.",
      "D": "Tampoco corresponde exclusión por cinco días en un niño afebril en esta fase."
    },
    "src": "CDC · Prevención del parvovirus B19, período de contagio",
    "src_url": "https://www.cdc.gov/parvovirus-b19/prevention-treatment/index.html"
  },
  {
    "originalId": "abril-2022:84",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "Un registro aislado de 150/90 mmHg en un adulto asintomático requiere mediciones estandarizadas repetidas. El monitoreo ambulatorio o domiciliario validado permite confirmar hipertensión sostenida y detectar el efecto de guardapolvo blanco.",
    "o": {
      "A": "La PTOG evalúa el metabolismo de la glucosa y no confirma hipertensión.",
      "B": "Elegir un diurético a partir de una sola medición omite la confirmación diagnóstica.",
      "C": "Reducir el sodio y mejorar los hábitos es apropiado desde ahora, pero no determina si la presión está persistentemente elevada."
    },
    "src": "Ministerio de Salud de la Nación · GPC nacional de hipertensión arterial, actualización 2024, diagnóstico",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/salud-guia-practica-clinica-nacional-hta-2024.pdf",
    "stem": "Varón de 48 años asintomático, sin diagnóstico de hipertensión ni signos de lesión aguda de órgano blanco. En un control se obtiene por primera vez una TA de 150/90 mmHg. ¿Qué conducta permite confirmar o descartar hipertensión sostenida?",
    "options": [
      "Solicitar una PTOG.",
      "Iniciar hidroclorotiazida basándose en esa única toma.",
      "Indicar solamente cambios de hábitos y dieta hiposódica.",
      "Repetir mediciones con técnica estandarizada y confirmar preferentemente con MAPA o monitoreo domiciliario validado."
    ]
  },
  {
    "originalId": "abril-2022:85",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "Una lesión periférica en contacto con la pleura ofrece un trayecto percutáneo corto. Si obtener tejido modifica la conducta, la biopsia guiada por imágenes es una opción apropiada.",
    "o": {
      "A": "En una lesión central sin acceso endobronquial hay que planificar la vía según su relación con bronquios, vasos y ganglios. No ofrece el acceso periférico descrito.",
      "B": "La ubicación central profunda exige atravesar más parénquima que un nódulo subpleural.",
      "C": "Una lesión central visible desde el árbol bronquial puede muestrearse por broncoscopia."
    },
    "src": "NICE NG122 · Lung cancer: diagnosis and management, elección del procedimiento diagnóstico",
    "src_url": "https://www.nice.org.uk/guidance/ng122/chapter/diagnosis-and-staging",
    "stem": "Ante sospecha de cáncer de pulmón se necesita tejido para definir el tratamiento. No hay adenopatías ni metástasis accesibles. ¿Qué localización ofrece el acceso más favorable para una biopsia pulmonar percutánea transtorácica guiada por imágenes?"
  },
  {
    "originalId": "abril-2022:87",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "Los cilindros de células epiteliales tubulares y los granulosos abundantes favorecen lesión tubular aguda. Una FeNa de 1,6 % por sí sola no establece el diagnóstico ni demuestra que los AINE sean la causa.",
    "o": {
      "A": "En glomerulonefritis orientarían más los eritrocitos dismórficos y los cilindros hemáticos.",
      "C": "La obstrucción se evalúa buscando retención o dilatación de la vía urinaria. No explica tan bien este sedimento.",
      "D": "La nefropatía membranosa se presenta típicamente con proteinuria importante, con frecuencia nefrótica."
    },
    "src": "Manual Merck profesional · Sedimento urinario en necrosis tubular aguda y azoemia prerrenal",
    "src_url": "https://www.merckmanuals.com/professional/multimedia/table/laboratory-findings-distinguishing-acute-tubular-necrosis-from-prerenal-azotemia"
  },
  {
    "originalId": "abril-2022:88",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Una convulsión que persiste a los cinco minutos requiere una benzodiacepina de rescate junto con sostén respiratorio y control de glucemia. Si se dispone de diazepam rectal y no hay vía venosa, puede usarse 0,5 mg/kg.",
    "o": {
      "B": "La absorción IM del diazepam es errática y 5 mg/kg es una dosis excesiva.",
      "C": "El lorazepam IV es una opción con acceso venoso. La vía IM propuesta no es la vía de rescate preferida.",
      "D": "La fenitoína es una opción de segunda línea ante persistencia de la crisis después de benzodiacepinas."
    },
    "src": "OMS/OPS · Atención de niños y adolescentes, cuadro 12, tratamiento de las convulsiones",
    "src_url": "https://www.paho.org/sites/default/files/who_2022_phc_children_adolescents_1.pdf",
    "stem": "Niño de dos años con fiebre y convulsión tónico-clónica generalizada que lleva seis minutos. Se inicia el ABC, se controla glucemia y se solicita traslado. Sin acceso venoso ni midazolam disponible, ¿qué fármaco de rescate está indicado entre las opciones?",
    "options": [
      "Diazepam rectal 0,5 mg/kg.",
      "Diazepam intramuscular 5 mg/kg.",
      "Lorazepam intramuscular 0,1 mg/kg.",
      "Fenitoína endovenosa como primer fármaco."
    ]
  },
  {
    "originalId": "abril-2022:89",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "Cuando la presión ventricular supera a la de la aorta y la arteria pulmonar, se abren las válvulas semilunares. Termina la contracción isovolumétrica y comienza la eyección.",
    "o": {
      "A": "El llenado comienza al abrirse las válvulas auriculoventriculares durante la diástole.",
      "B": "Al comienzo de la contracción isovolumétrica las cuatro válvulas están cerradas.",
      "C": "El cierre de las semilunares marca el final de la eyección, después de su apertura."
    },
    "src": "OpenStax · Anatomy and Physiology 2e, 19.3 Cardiac Cycle",
    "src_url": "https://openstax.org/books/anatomy-and-physiology-2e/pages/19-3-cardiac-cycle"
  },
  {
    "originalId": "abril-2022:90",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "El aumento del dolor al retirar la mano tras una palpación suave sugiere irritación peritoneal. En este cuadro justifica evaluación urgente de causas abdominales y ginecológicas.",
    "o": {
      "B": "Los ruidos disminuidos pueden acompañar al íleo y son poco específicos por sí solos.",
      "C": "La puñopercusión lumbar dolorosa orienta a patología renal o de la vía urinaria.",
      "D": "La equimosis periumbilical de Cullen describe un hallazgo cutáneo distinto de la irritación peritoneal."
    },
    "src": "Manual MSD profesional · Dolor abdominal agudo, examen físico",
    "src_url": "https://www.msdmanuals.com/es/professional/trastornos-gastrointestinales/abdomen-agudo-y-gastroenterolog%C3%ADa-quir%C3%BArgica/dolor-abdominal-agudo",
    "stem": "Mujer de 30 años con dolor súbito en abdomen inferior, fiebre y vómitos. ¿Qué hallazgo orienta más directamente a irritación peritoneal?",
    "options": [
      "Dolor a la descompresión brusca (signo de Blumberg).",
      "Ruidos hidroaéreos disminuidos.",
      "Puñopercusión lumbar positiva.",
      "Equimosis periumbilical (signo de Cullen)."
    ]
  },
  {
    "originalId": "abril-2022:91",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "Las estrías blanquecinas que forman una red en la mucosa yugal son características del liquen plano oral reticular. Puede ser asintomático.",
    "o": {
      "A": "La leucoplasia suele verse como una placa blanca persistente sin la trama fina característica.",
      "B": "La mordedura reiterada deja una superficie irregular o desflecada sobre la línea de oclusión.",
      "C": "En la candidiasis seudomembranosa las placas suelen desprenderse al raspado."
    },
    "src": "DermNet · Oral lichen planus, variante reticular",
    "src_url": "https://dermnetnz.org/topics/oral-lichen-planus"
  },
  {
    "originalId": "abril-2022:92",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Una HbA1c mayor de 10 % es uno de los umbrales de hiperglucemia marcada que justifican considerar insulina. También pesan la clínica y el catabolismo. El porcentaje aislado no es una indicación absoluta.",
    "o": {
      "B": "La baja adherencia requiere identificar barreras y acordar un plan que la persona pueda sostener.",
      "C": "Una glucemia al azar apenas superior a 200 mg/dL puede apoyar el diagnóstico si hay síntomas clásicos, pero por sí sola no es el umbral de hiperglucemia marcada para iniciar insulina.",
      "D": "La glucosuria depende del umbral renal y también puede aparecer con inhibidores de SGLT2."
    },
    "src": "ADA · Standards of Care in Diabetes 2026, sección 9, inicio de insulinoterapia",
    "src_url": "https://diabetesjournals.org/care/article/49/Supplement_1/S183/163934",
    "stem": "En una persona adulta con DM2 sin crisis hiperglucémica, ¿qué dato aislado alcanza uno de los umbrales de hiperglucemia marcada que la ADA propone para considerar iniciar insulina?",
    "options": [
      "HbA1c de 10,5 %.",
      "Dificultad para cumplir el tratamiento oral.",
      "Una glucemia al azar de 205 mg/dL.",
      "Glucosuria en una tira reactiva."
    ]
  },
  {
    "originalId": "abril-2022:93",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "El descenso del recuento de plaquetas es frecuente en el dengue. Su evolución se interpreta con el hematocrito, el sangrado y los signos de alarma.",
    "o": {
      "A": "Trombofilia describe predisposición a trombosis, no un recuento hematológico típico del dengue.",
      "C": "La eosinofilia orienta, entre otras causas, a alergia o parasitosis.",
      "D": "La anisocitosis expresa variación del tamaño eritrocitario y no orienta específicamente a dengue."
    },
    "src": "Ministerio de Salud de la Nación · GPC sobre diagnóstico y tratamiento del dengue, versión breve",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/2024/09/gpc_dengue_vb_1012025.pdf"
  },
  {
    "originalId": "abril-2022:94",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "Los accesos de tos seguidos de gallo inspiratorio y vómitos postusivos, después de una fase catarral, orientan a coqueluche. La falta de vacunación documentada aumenta la sospecha.",
    "o": {
      "A": "El reflujo puede causar tos o regurgitación, pero no suele seguir este patrón catarral y paroxístico.",
      "B": "En la bronquiolitis predominan la dificultad respiratoria y las sibilancias en menores de dos años.",
      "D": "En la neumonía bacteriana orientan más la fiebre alta, la taquipnea y los hallazgos focales."
    },
    "src": "Ministerio de Salud de la Nación · Guía de coqueluche, diciembre de 2025, presentación clínica",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/20251215-guiacoqueluche_23122025.pdf",
    "stem": "Niño de tres años sin vacunación documentada. Después de un catarro, lleva dos semanas con accesos repetidos de tos, seguidos de un gallo inspiratorio y vómitos. Está afebril y sin estridor entre los episodios. ¿Cuál es el diagnóstico más probable?"
  },
  {
    "originalId": "abril-2022:96",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "Los flebotónicos, como diosmina con hesperidina, pueden aliviar sangrado y prurito en algunos pacientes. Son un complemento de la fibra, la hidratación y la corrección del pujo.",
    "o": {
      "A": "Los AINE pueden aliviar dolor, pero no son flebotónicos ni tratan específicamente el sangrado.",
      "C": "La simeticona se usa para gases y la trimebutina para síntomas digestivos funcionales.",
      "D": "La heparina es un anticoagulante y no está indicada para controlar sangrado hemorroidal."
    },
    "src": "ASCRS · Guía de enfermedad hemorroidal 2024, tratamiento médico",
    "src_url": "https://www.ascrsu.com/ascrs/view/ASCRS-Evidence-Based-Guidelines-and-Expert-Consensus/3982022/3/Management_of_Hemorrhoids__2024_",
    "stem": "Adulto con hemorroides internas confirmadas, prurito y sangrado leve ya evaluado, sin trombosis. Además de fibra y medidas defecatorias, ¿qué opción es un flebotónico con evidencia de alivio sintomático?"
  },
  {
    "originalId": "abril-2022:97",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "La restricción del aporte energético que conduce a un peso significativamente bajo integra los criterios diagnósticos. Se evalúan también el temor a engordar o las conductas que impiden ganar peso y la alteración en la vivencia del peso o la figura.",
    "o": {
      "A": "La amenorrea puede aparecer, pero no se exige para el diagnóstico.",
      "B": "Las purgas pueden ocurrir en un subtipo y no son necesarias en la presentación restrictiva.",
      "D": "La depresión puede coexistir y requiere evaluación independiente."
    },
    "src": "Manual MSD profesional · Anorexia nerviosa, criterios DSM-5-TR",
    "src_url": "https://www.msdmanuals.com/es/professional/trastornos-psiqui%C3%A1tricos/trastornos-de-la-alimentaci%C3%B3n-y-de-la-ingesta-de-alimentos/anorexia-nerviosa?autoredirectid=35992&ruleredirectid=751",
    "stem": "Según el DSM-5-TR, ¿cuál de estos hallazgos integra los criterios diagnósticos de anorexia nerviosa?",
    "options": [
      "Amenorrea obligatoria.",
      "Conductas purgativas en todos los casos.",
      "Restricción energética que conduce a un peso significativamente bajo.",
      "Episodio depresivo mayor."
    ]
  },
  {
    "originalId": "abril-2022:98",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "La mastalgia cíclica y la nodularidad bilateral sugieren cambios fibroquísticos. A los 26 años, la ecografía dirigida a las zonas palpables es el estudio inicial para caracterizar los nódulos.",
    "o": {
      "A": "La mamografía no es el primer estudio de una masa palpable en una mujer de 26 años con esta presentación.",
      "C": "El tumor filodes suele presentarse como una masa dominante que aumenta de tamaño. La biopsia se decide según la evaluación clínica y por imágenes.",
      "D": "El patrón bilateral cíclico orienta a cambios fibroquísticos. Los marcadores tumorales no caracterizan una masa mamaria palpable."
    },
    "src": "ACR/RSNA · Appropriateness Criteria: Palpable Breast Masses, menores de 30 años",
    "src_url": "https://www.radiologyinfo.org/en/info/acs-palpable-breast-masses"
  },
  {
    "originalId": "abril-2022:99",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "La rectificación de la lordosis cervical es un hallazgo inespecífico. No se ha demostrado que este hallazgo aislado explique el vértigo y corresponde evaluar causas vestibulares.",
    "o": {
      "A": "La laberintitis puede provocar vértigo agudo prolongado con hipoacusia.",
      "B": "Ménière produce episodios de vértigo acompañados de síntomas auditivos fluctuantes.",
      "D": "El vértigo posicional paroxístico benigno causa episodios breves desencadenados por cambios de posición de la cabeza."
    },
    "src": "Bárány Society · Position on cervical dizziness, documento de consenso",
    "src_url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9837683/"
  },
  {
    "originalId": "abril-2022:100",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "El RDW o ADE mide la variabilidad del tamaño de los eritrocitos. Un valor alto indica anisocitosis, incluso si el volumen corpuscular medio está dentro del rango habitual.",
    "o": {
      "A": "La macrocitosis se define por aumento del volumen corpuscular medio.",
      "C": "La hipocromía describe menor contenido o concentración de hemoglobina en el eritrocito.",
      "D": "La poiquilocitosis indica variación de forma, una característica distinta del tamaño."
    },
    "src": "MedlinePlus · Amplitud de distribución eritrocitaria",
    "src_url": "https://medlineplus.gov/spanish/pruebas-de-laboratorio/amplitud-de-distribucion-eritrocitaria/"
  },
  {
    "originalId": "diciembre-2022:1",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "Con 115 mg/dL en ayunas, obesidad y antecedente de macrosomía, la guía nacional indica una PTOG con 75 g para evaluar la glucemia a las dos horas y detectar diabetes o tolerancia alterada.",
    "o": {
      "A": "Una glucemia en ayunas de 115 mg/dL no alcanza el umbral diagnóstico de 126 mg/dL.",
      "C": "Repetir la glucemia basal puede ser una alternativa si la PTOG no está disponible, pero no detecta por sí sola una alteración poscarga aislada.",
      "D": "El perfil lipídico puede aportar a la evaluación cardiovascular. Los estudios tiroideos no clasifican la alteración glucémica."
    },
    "src": "Ministerio de Salud de la Nación · GPC nacional de DM2, algoritmo diagnóstico de glucemia alterada en ayunas",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/bancos/2021-01/guia-nacional-practica-clinica-diabetes-mellitius-tipo2_version-abreviada.pdf",
    "stem": "Mujer asintomática de 46 años, IMC 30 kg/m², antecedente de un recién nacido de 4600 g y glucemia plasmática de 115 mg/dL tras ocho horas de ayuno. Según la guía nacional argentina de DM2, si se dispone de todas las pruebas, ¿cuál se prefiere para completar la evaluación glucémica?"
  }
];
  for (const {originalId, stem, options, ...key} of reviews) {
    const [examId, number] = originalId.split(':');
    const exam = EX.find(candidate => candidate.id === examId);
    const question = exam?.qs.find(candidate => candidate.n === Number(number));
    if (!question) continue;
    if (stem) {
      question.q = stem + ' [Adaptada para estudio.]';
      question.reviewVersion = key.verifiedOn;
    }
    if (options) question.o = options;
    KEY[examId][number] = {...key, originalId, status: 'fundamentada', calificable: true};
  }
}
