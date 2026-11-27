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
  },
  {
    "originalId": "diciembre-2022:2",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "La detección del antígeno específico o la identificación del parásito en materia fecal confirma la infección. La eliminación puede ser intermitente, por lo que los CDC aconsejan recoger tres muestras en días distintos.",
    "o": {
      "A": "El cloruro en sudor evalúa fibrosis quística, que también puede causar esteatorrea.",
      "B": "El hemocultivo identifica microorganismos en sangre y no diagnostica esta infección intestinal.",
      "D": "Los leucocitos fecales indican inflamación inespecífica y no identifican Giardia."
    },
    "src": "CDC · Pruebas y diagnóstico clínicos de la infección por Giardia",
    "src_url": "https://www.cdc.gov/giardia/es/hcp/diagnosis-testing/index.html",
    "stem": "Niño de dos años con diarrea prolongada, meteorismo y heces grasas tras beber agua de arroyo. ¿Qué estudio permite confirmar giardiasis?",
    "options": [
      "Cloruro en sudor",
      "Hemocultivo",
      "Antígeno de Giardia o demostración del parásito en heces",
      "Leucocitos fecales"
    ]
  },
  {
    "originalId": "diciembre-2022:3",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "Ante la ausencia de dosis comprobables se inicia el recupero con vacuna antipoliomielítica inactivada (IPV) y se programan las dosis pendientes según edad e intervalos. En la Argentina se usa un esquema exclusivo con IPV desde 2020.",
    "o": {
      "A": "La Sabin oral ya no integra el esquema regular argentino.",
      "B": "No se posterga el inicio del recupero a la espera de la adolescencia.",
      "C": "La edad escolar no permite presumir que completó el esquema."
    },
    "src": "Ministerio de Salud de la Nación · Recomendaciones de vacunación contra la poliomielitis, recupero de esquemas atrasados",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/2018/02/2024_recomendaciones_vacuna_contra_la_polio_27112024.pdf",
    "stem": "Pedro tiene 5 años y 11 meses. Se revisaron el registro nominal y los vacunatorios previos sin encontrar dosis documentadas. Al planificar el recupero según el calendario argentino, ¿qué corresponde específicamente para poliomielitis?",
    "options": [
      "Iniciar con vacuna Sabin oral.",
      "Esperar hasta la adolescencia para iniciar el esquema.",
      "Considerarlo inmunizado por haber alcanzado la edad escolar.",
      "Iniciar el recupero con vacuna IPV y programar las dosis restantes."
    ]
  },
  {
    "originalId": "diciembre-2022:4",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "El dolor unilateral súbito y la ausencia del reflejo cremastérico hacen sospechar torsión testicular. Corresponde activar de inmediato la evaluación quirúrgica y la exploración para intentar preservar el testículo.",
    "o": {
      "B": "Esperar la orina y el Doppler retrasa la exploración cuando la sospecha clínica es alta.",
      "C": "El reposo y el control a las doce horas consumen tiempo crítico de viabilidad testicular.",
      "D": "Condicionar la consulta quirúrgica a una ecografía puede retrasar la destorsión."
    },
    "src": "EAU · Pocket Guidelines on Paediatric Urology 2026, escroto agudo",
    "src_url": "https://d56bochluxqnz.cloudfront.net/documents/pocket-guidelines/EAU-Pocket-on-Paediatric-Urology-2026.pdf"
  },
  {
    "originalId": "diciembre-2022:5",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "En la clasificación histórica de Oxford, un ensayo aleatorizado individual con un intervalo de confianza estrecho corresponde al nivel 1b para una pregunta terapéutica. El diseño y la precisión importan al interpretar el resultado.",
    "o": {
      "B": "La opinión de expertos sin evaluación crítica explícita corresponde a un nivel inferior.",
      "C": "El diseño de casos y controles parte del desenlace y no asigna el tratamiento al azar.",
      "D": "Una cohorte puede ser prospectiva y aun así carecer de asignación aleatoria."
    },
    "src": "Oxford CEBM · Tabla de niveles de evidencia de marzo de 2009, columna Therapy/Prevention",
    "src_url": "https://www.cebm.ox.ac.uk/resources/levels-of-evidence/oxford-centre-for-evidence-based-medicine-levels-of-evidence-march-2009",
    "stem": "Para interpretar un estudio del efecto de una estatina en pacientes coronarios se usa la tabla histórica de Oxford CEBM de 2009. ¿Qué diseño corresponde al nivel 1b para una intervención terapéutica?",
    "options": [
      "Ensayo clínico aleatorizado individual con intervalo de confianza estrecho.",
      "Opinión de expertos sin evaluación crítica explícita.",
      "Estudio individual de casos y controles.",
      "Estudio individual de cohortes sin asignación aleatoria."
    ]
  },
  {
    "originalId": "diciembre-2022:6",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "Los animales infectados eliminan leptospiras en la orina. El contacto de piel lesionada o mucosas con agua, barro o vegetación contaminados explica los brotes asociados a inundaciones.",
    "o": {
      "A": "La exposición a sangre animal no explica la vía ambiental predominante.",
      "B": "El reservorio contamina el ambiente principalmente con orina. La vía planteada atribuye la contaminación a las heces.",
      "D": "La transmisión entre personas es excepcional y no explica estos brotes."
    },
    "src": "Ministerio de Salud de la Nación · Leptospirosis, transmisión y exposición en inundaciones",
    "src_url": "https://www.argentina.gob.ar/salud/glosario/leptospirosis"
  },
  {
    "originalId": "diciembre-2022:7",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "El corte de piedra expone a sílice cristalina respirable. Los nódulos de predominio superior y la calcificación ganglionar periférica apoyan silicosis en ese contexto.",
    "o": {
      "A": "La sarcoidosis también puede dar adenopatías hiliares, pero no es una neumoconiosis por exposición a sílice.",
      "C": "El timoma suele presentarse como una masa del mediastino anterior.",
      "D": "El linfoma puede producir adenopatías, pero explica peor la asociación entre exposición y patrón nodular pulmonar."
    },
    "src": "Manual MSD profesional · Silicosis, exposición ocupacional y hallazgos por imágenes",
    "src_url": "https://www.msdmanuals.com/professional/pulmonary-disorders/environmental-and-occupational-pulmonary-diseases/silicosis",
    "stem": "Un trabajador del corte de piedra presenta nódulos pulmonares de predominio superior y adenopatías hiliares con calcificación periférica en cáscara de huevo. ¿Qué neumoconiosis es más probable?",
    "options": [
      "Sarcoidosis",
      "Silicosis",
      "Timoma",
      "Linfoma"
    ]
  },
  {
    "originalId": "diciembre-2022:8",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "El tadalafilo potencia el efecto vasodilatador de los nitratos y puede causar hipotensión grave. El uso de cualquier nitrato orgánico, aun intermitente, contraindica la combinación.",
    "o": {
      "B": "El losartán puede contribuir al descenso de presión, pero no tiene la contraindicación absoluta propia de los nitratos.",
      "C": "Los tricíclicos pueden causar hipotensión ortostática y disfunción sexual. No comparten la interacción específica con los nitratos.",
      "D": "Los betabloqueantes requieren valorar presión y tolerancia, pero su uso aislado no contraindica tadalafilo."
    },
    "src": "DailyMed · Tadalafil, contraindicaciones, sección 4.1",
    "src_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7976c4ec-ecc4-4a49-a4fe-f990aece2d3c",
    "stem": "Varón de 51 años con DM2 y disfunción eréctil. Antes de indicar tadalafilo, ¿qué medicación hay que descartar porque la combinación está contraindicada? Las opciones se recuperaron de la versión de febrero de 2024."
  },
  {
    "originalId": "diciembre-2022:9",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "La dilatación del colon con toxicidad sistémica, deterioro e irritación peritoneal indica megacolon tóxico complicado. Requiere reanimación y colectomía abdominal subtotal urgente con ileostomía terminal. La ausencia de aire libre no descarta la urgencia.",
    "o": {
      "A": "El infliximab es una alternativa de rescate en colitis grave seleccionada, pero diferiría la cirugía ante peritonismo.",
      "C": "La azatioprina actúa lentamente y no es un tratamiento de rescate agudo.",
      "D": "La ciclosporina puede emplearse en colitis grave refractaria sin indicación quirúrgica inmediata.",
      "E": "La sulfasalazina oral no trata un megacolon tóxico con deterioro sistémico."
    },
    "src": "ASCRS · Clinical Practice Guidelines for the Surgical Management of Ulcerative Colitis, megacolon tóxico",
    "src_url": "https://fascrs.org/getattachment/Healthcare-Providers/Education/Clinical-Practice-Guidelines/2021-Ulcerative-Colitis-CPG.pdf?lang=en-US",
    "stem": "Varón con colitis ulcerosa grave internado por diez deposiciones sanguinolentas diarias. Pese a corticoides EV y reposición de volumen, presenta fiebre de 38,7 °C, FC 124/min, distensión progresiva, cese de las deposiciones y signos peritoneales. La radiografía muestra colon transverso de 8 cm sin aire libre. ¿Qué tratamiento requiere con urgencia?"
  },
  {
    "originalId": "diciembre-2022:10",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "Sentarse sin apoyo, emitir cadenas de sílabas y mostrarse tímido ante extraños figuran juntos en la lista de los nueve meses. Es una referencia para vigilancia del desarrollo y admite variabilidad individual.",
    "o": {
      "A": "A los cuatro meses se evalúan habilidades más tempranas, como sostener la cabeza y gorjear. La sedestación independiente no integra esa lista."
    },
    "src": "CDC · Indicadores del desarrollo a los 9 meses, áreas social, comunicativa y motora",
    "src_url": "https://www.cdc.gov/act-early/es/milestones/9-months.html",
    "stem": "Un lactante se sienta sin apoyo, repite «bababa» y se muestra tímido cuando se acerca un desconocido. Según las listas de los CDC, ¿en cuál de estos controles figuran los tres indicadores?",
    "options": [
      "Control de los cuatro meses.",
      "Control de los nueve meses."
    ]
  },
  {
    "originalId": "diciembre-2022:11",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "La constipación seguida de debilidad flácida, mala succión y llanto débil en un menor de un año orienta a botulismo del lactante. La exposición a miel es un antecedente posible. La sospecha requiere derivación urgente por riesgo respiratorio.",
    "o": {
      "A": "En el SUH se buscan anemia hemolítica, trombocitopenia y lesión renal, a menudo después de diarrea.",
      "B": "La salmonelosis entérica suele dar diarrea y fiebre, sin este patrón de debilidad bulbar.",
      "D": "Una sepsis puede producir decaimiento y mala alimentación, pero la secuencia de constipación y parálisis flácida es más orientadora.",
      "E": "La meningitis meningocócica suele producir fiebre, compromiso neurológico central o signos meníngeos."
    },
    "src": "Ministerio de Salud de la Nación · Botulismo infantil, síntomas y prevención",
    "src_url": "https://www.argentina.gob.ar/node/109377",
    "stem": "Lactante de 11 meses con constipación de varios días, succión progresivamente débil, llanto apagado e hipotonía simétrica. Está afebril y alerta. La familia refiere consumo reciente de miel. ¿Qué diagnóstico se debe sospechar?"
  },
  {
    "originalId": "diciembre-2022:12",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "Fiebre alta, disfagia con babeo, aspecto tóxico y estridor en un niño sin inmunización contra Hib orientan a epiglotitis. Se evita agitarlo o forzar el examen faríngeo mientras se convoca al equipo de vía aérea.",
    "o": {
      "A": "En el crup predominan la tos perruna y la disfonía. El babeo con incapacidad para deglutir es atípico.",
      "C": "La laringitis simple causa disfonía y explica peor la obstrucción grave con fiebre alta y babeo."
    },
    "src": "Royal Children’s Hospital · Acute upper airway obstruction, diagnóstico diferencial",
    "src_url": "https://www.rch.org.au/clinicalguide/guideline_index/acute_upper_airway_obstruction/",
    "stem": "Niño de cuatro años no vacunado con inicio rápido de fiebre alta, aspecto tóxico, estridor inspiratorio, babeo y dificultad para tragar. Permanece sentado e inclinado hacia adelante, sin tos perruna. ¿Cuál es el diagnóstico más probable?"
  },
  {
    "originalId": "diciembre-2022:13",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Para una persona adulta que solicita anticoncepción quirúrgica, la ley exige información y consentimiento de la propia persona. La solicitud no requiere autorización de su pareja.",
    "o": {
      "B": "La persona cónyuge no tiene poder de veto ni debe firmar el consentimiento de la solicitante."
    },
    "src": "Ley nacional 26.130 · texto actualizado, artículos 2 y 4",
    "src_url": "https://www.argentina.gob.ar/normativa/nacional/ley-26130-119260/actualizacion",
    "stem": "En la Argentina, una adulta solicita una ligadura tubaria después de recibir información sobre sus efectos, riesgos y alternativas. Según la Ley 26.130, ¿qué requisito corresponde?",
    "options": [
      "Consentimiento informado de la propia solicitante.",
      "Consentimiento informado de la solicitante y autorización escrita de su cónyuge."
    ]
  },
  {
    "originalId": "diciembre-2022:14",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "El levonorgestrel debe tomarse cuanto antes tras una relación sin protección. Puede utilizarse hasta cinco días después, con mayor eficacia cuanto menor sea la demora.",
    "o": {
      "A": "La edad de la adolescente no impide el acceso a anticoncepción de emergencia.",
      "C": "Esperar al tercer día reduce la oportunidad de prevenir el embarazo.",
      "D": "Un porcentaje fijo no permite calcular la eficacia individual. El tiempo transcurrido y el momento del ciclo influyen."
    },
    "src": "Ministerio de Salud de la Nación · Anticoncepción hormonal de emergencia, oportunidad de uso",
    "src_url": "https://www.argentina.gob.ar/node/90649",
    "stem": "Una adolescente consulta 12 horas después de la rotura del preservativo y elige anticoncepción de emergencia con levonorgestrel. ¿Qué indicación le das?",
    "options": [
      "Esperar hasta cumplir 18 años.",
      "Tomarlo ahora, lo antes posible.",
      "Postergar la toma hasta que pasen 72 horas.",
      "Elegir cualquier día de la semana porque la eficacia es siempre del 75 %."
    ]
  },
  {
    "originalId": "diciembre-2022:15",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "Tiene entre 50 y 80 años, fuma actualmente y acumula al menos 20 paquetes-año. Según la USPSTF corresponde ofrecer TC de baja dosis anual luego de conversar sobre los beneficios y posibles daños.",
    "o": {
      "A": "La radiografía de tórax no es el método recomendado para reducir la mortalidad en esta población.",
      "C": "La broncoscopia es invasiva y puede tener indicación diagnóstica, pero no para pesquisa anual.",
      "D": "La citología de esputo no sustituye la TC de baja dosis en el programa recomendado."
    },
    "src": "USPSTF · Lung Cancer: Screening, población y modalidad",
    "src_url": "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/lung-cancer-screening",
    "stem": "Mujer asintomática de 62 años, fumadora actual de 30 paquetes-año, apta para tratamiento curativo. Según USPSTF, ¿qué pesquisa de cáncer pulmonar corresponde?",
    "options": [
      "Radiografía anual",
      "TC anual de tórax de baja dosis",
      "Broncoscopia anual",
      "Citología de esputo"
    ]
  },
  {
    "originalId": "diciembre-2022:16",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "A los 16 años puede decidir sobre el cuidado de su cuerpo. La consulta debe ser confidencial e incluir elección informada del método, preservativo para prevención de ITS y oferta voluntaria de pruebas de VIH y sífilis.",
    "o": {
      "A": "Exigir que vuelva con un adulto crea una barrera y desconoce su autonomía.",
      "B": "La nuliparidad no contraindica el DIU. Descartarlo de entrada limita la elección.",
      "D": "Un PAP no es requisito para iniciar anticoncepción hormonal y no debe demorar el acceso."
    },
    "src": "Ministerio de Salud de la Nación · Guía sobre derechos de adolescentes para el acceso al sistema de salud",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/guia_sobre_derechos_de_adolescentes_para_el_acceso_al_sistema_de_salud.pdf"
  },
  {
    "originalId": "diciembre-2022:17",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "Un ganglio intramamario con morfología típica e hilio graso y calcificaciones vasculares típicas son hallazgos benignos. Corresponde BI-RADS 2 y control habitual según edad y riesgo.",
    "o": {
      "A": "BI-RADS 0 indica evaluación incompleta que requiere imágenes o comparaciones adicionales.",
      "B": "BI-RADS 1 es una evaluación negativa sin un hallazgo benigno descrito.",
      "D": "BI-RADS 3 se usa para un hallazgo probablemente benigno que amerita seguimiento a corto plazo."
    },
    "src": "American College of Radiology · BI-RADS, mamografía, categorías de evaluación y hallazgos benignos",
    "src_url": "https://cs.acr.org/-/media/ACR/Files/RADS/BI-RADS/Mammography-Reporting.pdf",
    "stem": "Mamografía completa de una mujer de 43 años. Se observan calcificaciones vasculares típicas y un nódulo oval, circunscripto, con hilio graso, identificado como ganglio intramamario normal. No hay otros hallazgos. ¿Qué categoría BI-RADS corresponde?"
  },
  {
    "originalId": "diciembre-2022:18",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "Ante sospecha de enfermedad inflamatoria intestinal se indica ileocolonoscopia con biopsias segmentarias para evaluar extensión y obtener histología. La evaluación inicial puede complementarse con ecografía intestinal o enterorresonancia.",
    "o": {
      "A": "Los estudios de materia fecal son importantes para excluir infección y ya fueron realizados. Repetir un cultivo no aporta histología.",
      "B": "La TC puede identificar complicaciones, pero no permite tomar biopsias mucosas.",
      "C": "Sin abdomen agudo ni complicación quirúrgica, la laparotomía agrega riesgo sin ser el método diagnóstico inicial."
    },
    "src": "ECCO–ESGAR–ESP–IBUS 2025 · Diagnóstico y seguimiento de EII, parte 1, recomendación 1",
    "src_url": "https://pure.amsterdamumc.nl/ws/files/155958611/Ecco-esgar-esp-ibus-guideline-on-diagnostics-and-monitoring-of-patients-with-inflammatory-bowel-disease.pdf",
    "stem": "Varón de 25 años con seis semanas de diarrea sanguinolenta, dolor en fosa ilíaca derecha, anemia y artralgias. Está estable, sin peritonismo ni signos de colitis aguda grave. Los estudios de materia fecal para enteropatógenos, incluido C. difficile, son negativos. Ante sospecha de enfermedad inflamatoria intestinal, ¿qué procedimiento permite evaluar la mucosa y obtener histología?",
    "options": [
      "Repetir únicamente el coprocultivo.",
      "TC de abdomen y pelvis.",
      "Laparotomía exploradora.",
      "Ileocolonoscopia con biopsias segmentarias."
    ]
  },
  {
    "originalId": "diciembre-2022:19",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "Obtener pus por aspiración del abombamiento periamigdalino confirma una colección y ayuda a distinguir el absceso de la celulitis. Se realiza por personal entrenado tras valorar la vía aérea.",
    "o": {
      "A": "La biopsia no es el método inicial para confirmar la colección aguda.",
      "B": "El cultivo superficial puede identificar flora faríngea sin demostrar pus en el espacio periamigdalino.",
      "C": "La TC con contraste ayuda si hay duda diagnóstica o extensión profunda, pero no obtiene material purulento."
    },
    "src": "Manual MSD profesional · Absceso y celulitis periamigdalinos, diagnóstico",
    "src_url": "https://www.msdmanuals.com/es/professional/trastornos-otorrinolaringol%C3%B3gicos/trastornos-bucales-y-far%C3%ADngeos/absceso-y-celulitis-periamigdalinos",
    "stem": "Adolescente estable con trismus, voz apagada, desviación de úvula y abombamiento periamigdalino unilateral. ¿Qué procedimiento confirma una colección al obtener pus?",
    "options": [
      "Biopsia de amígdala",
      "Cultivo del exudado amigdalino",
      "TC cuello con cortes axiales y coronales con contraste endovenoso",
      "Punción aspiración del pilar amigdalino"
    ]
  },
  {
    "originalId": "diciembre-2022:20",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "En la acalasia espástica tipo III, la POEM permite efectuar una miotomía larga adaptada al segmento espástico. SAGES favorece este abordaje cuando hay experiencia disponible. Debe explicarse el riesgo posterior de reflujo.",
    "o": {
      "A": "Los antagonistas del calcio suelen dar alivio limitado y transitorio.",
      "C": "La dilatación neumática actúa sobre la unión esofagogástrica y no trata en toda su longitud el segmento espástico.",
      "D": "La toxina botulínica tiene efecto transitorio y suele reservarse para quienes no pueden recibir tratamiento definitivo."
    },
    "src": "SAGES · Actualización 2024 de las guías sobre miotomía endoscópica peroral en acalasia",
    "src_url": "https://www.sages.org/publications/guidelines/update-to-guidelines-for-the-use-of-poem-for-achalasia/",
    "stem": "Varón de 70 años con disfagia progresiva y regurgitación. Se descartó una obstrucción tumoral mediante evaluación endoscópica y estudios complementarios. La manometría confirma acalasia tipo III con segmento espástico largo. Está en condiciones de recibir tratamiento definitivo en un centro experto. ¿Qué intervención permite adaptar la miotomía a la longitud de ese segmento?",
    "options": [
      "Nifedipina sublingual.",
      "Miotomía endoscópica peroral (POEM) extendida.",
      "Dilatación neumática del esfínter inferior.",
      "Inyecciones periódicas de toxina botulínica."
    ]
  },
  {
    "originalId": "diciembre-2022:21",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "El dolor intenso con acidosis y neumatosis intestinal asociada a gas portal orienta a isquemia mesentérica avanzada. La fibrilación auricular aumenta la sospecha de embolia arterial, aunque por sí sola no demuestra el mecanismo.",
    "o": {
      "B": "En una úlcera gastroduodenal perforada es más típico el neumoperitoneo que el gas en las ramas portales con lesión de intestino delgado.",
      "C": "El íleo biliar suele combinar obstrucción mecánica, cálculo ectópico y neumobilia. La neumobilia es distinta del gas portal.",
      "D": "Una neoplasia de sigma suele mostrar una lesión colónica obstructiva con dilatación proximal, ausente en la descripción."
    },
    "src": "WSES · Acute mesenteric ischemia: updated guidelines, diagnóstico clínico y por angio-TC",
    "src_url": "https://link.springer.com/article/10.1186/s13017-022-00443-x"
  },
  {
    "originalId": "diciembre-2022:22",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "Una masa fluctuante dolorosa con fiebre en la fosa isquioanal indica un absceso. La incisión y el drenaje oportunos controlan el foco. La anestesia se elige según profundidad y extensión.",
    "o": {
      "A": "Los antibióticos pueden agregarse ante signos sistémicos, pero solos dejan la colección sin drenar.",
      "B": "La aspiración con aguja no sustituye el drenaje adecuado de este absceso clínicamente evidente.",
      "D": "La TC es útil si la colección es oculta o compleja. En el escenario descripto no debe demorar el control del foco."
    },
    "src": "ASCRS · Guía sobre absceso anorrectal, 2022, diagnóstico y drenaje",
    "src_url": "https://doi.org/10.1097/dcr.0000000000002473",
    "stem": "Varón de 35 años con dolor perianal y fiebre. La evaluación quirúrgica identifica un absceso isquioanal fluctuante, bien localizado y accesible, sin sospecha de extensión profunda. ¿Qué conducta permite controlar el foco?"
  },
  {
    "originalId": "diciembre-2022:23",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "El prolapso que requiere reducción manual define grado III. Con síntomas persistentes y un componente externo importante, la hemorroidectomía escisional trata ambos componentes.",
    "o": {
      "A": "El grado IV es irreductible. La ligadura tampoco resuelve el componente externo.",
      "B": "En el grado II el prolapso se reduce solo. La fotocoagulación no trata el componente externo voluminoso.",
      "D": "La esclerosis se dirige a hemorroides internas. Además, el comportamiento del prolapso corresponde a grado III."
    },
    "src": "ASCRS · Management of Hemorrhoids, 2024, indicaciones de hemorroidectomía",
    "src_url": "https://doi.org/10.1097/DCR.0000000000003276",
    "stem": "Paciente con hemorroides internas que prolapsan y requieren reducción manual, componente externo voluminoso y síntomas persistentes pese al tratamiento conservador. ¿Qué combinación de grado y tratamiento definitivo corresponde?"
  },
  {
    "originalId": "diciembre-2022:24",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "En el escalón 3 de la vía preferida se usa corticoide inhalado con formoterol a dosis baja como mantenimiento y alivio (MART). Así cada uso de rescate también aporta antiinflamatorio.",
    "o": {
      "B": "Budesonida de mantenimiento y salbutamol de rescate no constituyen el esquema MART del escalón 3."
    },
    "src": "GINA 2026 · Adultos y adolescentes, vía preferida, escalón 3",
    "src_url": "https://ginasthma.org/wp-content/uploads/2026/05/GINA-2026-Strategy-Report-WMS.pdf",
    "stem": "Adulto con asma que necesita tratamiento de escalón 3 tras verificar técnica inhalatoria y adherencia. Hay budesonida-formoterol disponible. Según la vía preferida de GINA, ¿qué esquema corresponde?",
    "options": [
      "Budesonida-formoterol a dosis baja como mantenimiento y como rescate.",
      "Budesonida sola de mantenimiento y salbutamol como rescate."
    ]
  },
  {
    "originalId": "diciembre-2022:25",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "La presencia de sangre visible en la materia fecal requiere investigar una causa orgánica antes de atribuir los síntomas al SII.",
    "o": {
      "A": "El dolor relacionado con la defecación forma parte del patrón clínico habitual del SII.",
      "C": "Las heces fragmentadas y duras son frecuentes en la constipación y por sí solas no indican sangrado ni inflamación.",
      "D": "La alternancia de diarrea y constipación es compatible con el subtipo mixto."
    },
    "src": "Organización Mundial de Gastroenterología · Directrices sobre síndrome de intestino irritable, signos de alarma",
    "src_url": "https://www.worldgastroenterology.org/UserFiles/file/guidelines/irritable-bowel-syndrome-spanish-2015.pdf",
    "stem": "En una persona con dolor abdominal recurrente y cambios del hábito evacuatorio, ¿qué hallazgo obliga a estudiar una causa orgánica antes de atribuir el cuadro al síndrome de intestino irritable?",
    "options": [
      "Dolor que mejora al evacuar.",
      "Sangre visible en la materia fecal.",
      "Heces duras en bolitas.",
      "Alternancia entre diarrea y constipación."
    ]
  },
  {
    "originalId": "diciembre-2022:26",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "La cinitaprida estimula la motilidad gastrointestinal. Su ficha técnica contempla la dispepsia tipo dismotilidad leve a moderada. La elección clínica depende de la evaluación previa y la respuesta al tratamiento.",
    "o": {
      "A": "El sucralfato actúa principalmente como protector de la mucosa.",
      "B": "La famotidina reduce la secreción de ácido al bloquear receptores H2.",
      "D": "El omeprazol inhibe la bomba de protones y no es un procinético."
    },
    "src": "AEMPS · Cinitaprida, ficha técnica, indicaciones y propiedades farmacodinámicas",
    "src_url": "https://cima.aemps.es/cima/pdfs/es/ft/78321/FT_78321.html.pdf",
    "stem": "En un adulto con dispepsia funcional de predominio posprandial ya evaluada, se considera un procinético. ¿Cuál de estos fármacos pertenece a ese grupo?",
    "options": [
      "Sucralfato",
      "Famotidina",
      "Cinitaprida",
      "Omeprazol"
    ]
  },
  {
    "originalId": "diciembre-2022:27",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "Las ondas P y los QRS siguen ritmos regulares independientes. La frecuencia auricular supera a la ventricular y el PR cambia sin conducción fija. Esto indica bloqueo AV completo, con escape de QRS estrecho.",
    "o": {
      "A": "En el primer grado cada onda P conduce y el PR permanece prolongado y constante.",
      "B": "En Mobitz I se observa alargamiento progresivo del PR hasta una P bloqueada.",
      "C": "En Mobitz II hay ondas P bloqueadas y un PR estable en los latidos conducidos. Tampoco se describe el eje de un hemibloqueo."
    },
    "src": "Manual MSD profesional · Bloqueo auriculoventricular de tercer grado",
    "src_url": "https://www.msdmanuals.com/es/professional/trastornos-cardiovasculares/arritmias-card%C3%ADacas-espec%C3%ADficas/bloqueo-auriculoventricular?langselector=1"
  },
  {
    "originalId": "diciembre-2022:28",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "El síndrome febril con cefalea retroocular, mialgias, exantema, leucopenia y trombocitopenia orienta a dengue. El dolor abdominal intenso es un signo de alarma que exige evaluación y vigilancia urgentes.",
    "o": {
      "B": "Stevens-Johnson suele producir lesiones cutáneas dolorosas con erosiones mucosas o desprendimiento epidérmico.",
      "C": "La enfermedad meningocócica también puede causar petequias y exige consideración urgente. La cefalea retroocular, el exantema y la leucopenia en conjunto favorecen dengue en este caso.",
      "D": "En la endocarditis se buscan bacteriemia, hallazgos cardíacos y fenómenos embólicos. El patrón clínico global es menos característico."
    },
    "src": "Ministerio de Salud de la Nación · Guía de práctica clínica sobre diagnóstico y tratamiento del dengue",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/2024/09/gpc_dengue_vc_1012025-652025.pdf"
  },
  {
    "originalId": "diciembre-2022:29",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Entre personas que tienen la enfermedad según el método de referencia, se espera que aproximadamente 90 de cada 100 den positivo. Las restantes son falsos negativos.",
    "o": {
      "B": "La probabilidad de estar sano dado un resultado negativo es el valor predictivo negativo.",
      "C": "La proporción de resultados negativos entre personas sanas es la especificidad.",
      "D": "La probabilidad de estar enfermo dado un positivo es el valor predictivo positivo y depende también de la prevalencia."
    },
    "src": "CDC · Diagnostic Sensitivity and Specificity, tabla de clasificación",
    "src_url": "https://reach.cdc.gov/sites/default/files/job-aids-resources/Sensitivity_and_Specificity.pdf"
  },
  {
    "originalId": "diciembre-2022:30",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "La fiebre alta, el deterioro rápido y la púrpura extensa de aparición brusca hacen sospechar meningococemia. La trombocitopenia puede acompañar la coagulopatía de la sepsis. Requiere tratamiento urgente.",
    "o": {
      "A": "La trombocitopenia inmune suele presentarse en un niño en buen estado general con trombocitopenia aislada.",
      "C": "La leucemia puede causar fiebre y hematomas, pero explica peor el deterioro con púrpura de progresión horaria.",
      "D": "En la vasculitis por IgA suele conservarse el recuento de plaquetas, pese a la púrpura palpable."
    },
    "src": "NICE NG240 · Reconocimiento de enfermedad meningocócica, signos de alarma",
    "src_url": "https://www.nice.org.uk/guidance/ng240/resources/meningitis-bacterial-and-meningococcal-disease-recognition-diagnosis-and-management-pdf-66143949881029"
  },
  {
    "originalId": "diciembre-2022:31",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "La lesión de alto grado se extiende hacia el canal y su límite superior no es visible. La escisión de la zona de transformación permite tratarla y estudiar invasión y márgenes en la pieza.",
    "o": {
      "B": "La histerectomía no es el tratamiento inicial de una CIN3 aislada.",
      "C": "La destrucción local impide evaluar márgenes e invasión y es inapropiada cuando la lesión no se visualiza completa.",
      "D": "El muestreo endocervical aislado no extirpa la lesión ya demostrada."
    },
    "src": "AEPCC · Guía 2022 de prevención del cáncer de cuello uterino, tratamiento de HSIL/CIN3",
    "src_url": "https://www.aepcc.org/wp-content/uploads/2021/11/AEPCC-Guia_Prevencion-cancer-cervix_2022.pdf",
    "stem": "Paciente no embarazada de 45 años, con biopsia cervical que informa HSIL/CIN3. En la colposcopía, la lesión se extiende al canal endocervical y no se ve su límite superior. ¿Qué conducta inicial corresponde?"
  },
  {
    "originalId": "diciembre-2022:32",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "La combinación de sangrado, útero mucho mayor que el esperado, hiperémesis e hipertensión antes de las 20 semanas orienta a mola hidatidiforme. Una concentración elevada de hCG puede asociarse a quistes tecaluteínicos bilaterales. Se evalúa con ecografía y hCG cuantitativa.",
    "o": {
      "A": "La hiperémesis explica los vómitos y la deshidratación, pero no el marcado aumento del tamaño uterino ni los anexos aumentados.",
      "B": "La hipertensión gestacional típica se inicia después de las 20 semanas y no explica la discordancia de tamaño.",
      "C": "Un aborto incompleto puede producir sangrado y cuello permeable, pero no explica tan bien el útero desproporcionado y el compromiso anexial."
    },
    "src": "FIGO · Diagnosis and management of gestational trophoblastic disease, actualización 2025",
    "src_url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12411817/"
  },
  {
    "originalId": "diciembre-2022:33",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "El shock con útero hipertónico en el tercer trimestre sugiere desprendimiento prematuro de placenta normoinserta. La sangre puede acumularse detrás de la placenta y provocar hipovolemia sin sangrado vaginal visible.",
    "o": {
      "A": "El shock séptico también puede causar hipotensión y taquicardia. La hipertonía uterina y el contexto obstétrico favorecen hemorragia retroplacentaria."
    },
    "src": "Manual MSD profesional · Desprendimiento placentario, hemorragia oculta",
    "src_url": "https://www.msdmanuals.com/es/professional/ginecolog%C3%ADa-y-obstetricia/complicaciones-prenatales/desprendimiento-placentario"
  },
  {
    "originalId": "diciembre-2022:34",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "Los investigadores clasifican a los participantes por exposición previa al tabaco y siguen ambos grupos para comparar la evolución de la función pulmonar. Eso define una cohorte prospectiva.",
    "o": {
      "A": "El seguimiento comparativo de grupos según exposición permite evaluar una asociación y excede un diseño puramente descriptivo.",
      "B": "En casos y controles los grupos se seleccionan por el desenlace, no por el consumo de tabaco.",
      "D": "Nadie asigna la exposición al cigarrillo, por lo que el estudio es observacional."
    },
    "src": "CDC · Cohort Studies, diseño prospectivo",
    "src_url": "https://stacks.cdc.gov/view/cdc/6688/cdc_6688_DS1.pdf"
  },
  {
    "originalId": "diciembre-2022:35",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "El hemopericardio a tensión limita el llenado ventricular y causa shock obstructivo. La hipotensión, la ingurgitación yugular, los ruidos cardíacos apagados y el colapso de cavidades derechas orientan a taponamiento.",
    "o": {
      "B": "Una hemorragia hipovolémica aislada suele reducir el llenado yugular y no explica el colapso cardíaco por líquido pericárdico.",
      "C": "El shock describe el estado circulatorio. El hallazgo ecográfico identifica su causa obstructiva.",
      "D": "Un neumotórax a tensión también puede distender las yugulares, pero no explica el derrame pericárdico con colapso derecho."
    },
    "src": "Manual MSD profesional · Taponamiento cardíaco traumático, clínica y ecografía",
    "src_url": "https://www.msdmanuals.com/professional/injuries-poisoning/thoracic-trauma/cardiac-tamponade?media=print",
    "stem": "Tras un traumatismo torácico, un conductor presenta hipotensión, pulso paradójico, ingurgitación yugular y ruidos cardíacos apagados. La ecografía a pie de cama muestra líquido pericárdico con colapso de cavidades derechas. ¿Qué lesión explica el shock?"
  },
  {
    "originalId": "diciembre-2022:36",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "La fiebre con escalofríos indica inflamación sistémica, la ictericia y el perfil de laboratorio evidencian colestasis, y la ecografía demuestra obstrucción biliar. La combinación cumple criterios diagnósticos de colangitis aguda.",
    "o": {
      "A": "La pancreatitis puede ser de origen biliar, pero no explica mejor la combinación de infección, colestasis y obstrucción documentada. En el caso tampoco se demuestra elevación de lipasa ni inflamación pancreática."
    },
    "src": "Tokyo Guidelines 2018 · Initial management of acute biliary infection, criterios de colangitis",
    "src_url": "https://sites.duke.edu/gifellowship/files/2019/08/Tokyo-guidelines-2018-acute-cholangitis.pdf",
    "stem": "Varón de 56 años con fiebre de 39 °C, escalofríos, dolor en hipocondrio derecho e ictericia. Tiene leucocitosis, hiperbilirrubinemia directa y fosfatasa alcalina elevada. La ecografía muestra colédoco dilatado con un cálculo distal. ¿Cuál es el diagnóstico más probable?"
  },
  {
    "originalId": "diciembre-2022:37",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Con TVP probable y ecografía no disponible dentro de cuatro horas, se solicita dímero D y se indica anticoagulación terapéutica interina si el riesgo hemorrágico lo permite. El resultado de la ecografía debe obtenerse dentro de 24 horas.",
    "o": {
      "B": "La aspirina no sustituye la anticoagulación terapéutica interina ante una TVP probable.",
      "C": "Atribuir el edema a la cirugía demoraría el estudio de una trombosis potencialmente embolígena.",
      "D": "La heparina de 5000 UI subcutáneas cada ocho horas es una pauta profiláctica y no alcanza intensidad terapéutica."
    },
    "src": "NICE NG158 · Diagnóstico de TVP, recomendaciones 1.1.3–1.1.4",
    "src_url": "https://www.nice.org.uk/guidance/NG158/chapter/recommendations",
    "stem": "Mujer con edema unilateral y dolor de pantorrilla después de cirugía del tendón de Aquiles. Wells para TVP de 3 puntos. Se verificó hemostasia, sin sangrado ni contraindicación para anticoagular. El resultado de la ecografía venosa estará disponible en 12 horas. Según NICE, ¿qué conducta inicial corresponde?",
    "options": [
      "Solicitar dímero D, iniciar anticoagulación terapéutica interina y obtener el resultado de la ecografía en menos de 24 horas.",
      "Dar aspirina y solicitar ecografía ambulatoria sin plazo.",
      "Indicar reposo y AINE durante 48 horas sin estudios.",
      "Indicar heparina no fraccionada 5000 UI subcutáneas cada ocho horas como tratamiento de la TVP probable."
    ]
  },
  {
    "originalId": "diciembre-2022:38",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "La exacerbación consiste en un empeoramiento agudo, en hasta 14 días, de la disnea y/o de la tos con esputo. Puede ocurrir sin fiebre. La mayor purulencia orienta a un posible desencadenante bacteriano y no identifica por sí sola al patógeno.",
    "o": {
      "A": "La fiebre aislada obliga a buscar su causa y no demuestra empeoramiento respiratorio.",
      "B": "La disnea paroxística nocturna con ortopnea y edema orienta más a insuficiencia cardíaca.",
      "C": "La tos y la expectoración crónicas sin cambios describen el estado basal."
    },
    "src": "GOLD 2027 · Exacerbaciones de EPOC, definición clínica, informe publicado en noviembre de 2026",
    "src_url": "https://goldcopd.org/wp-content/uploads/2026/11/GOLD-Report-2027-FINAL-v1.0-15Nov2026_WMV.pdf",
    "stem": "En una persona con EPOC, ¿qué cambio es más compatible con una exacerbación aguda posiblemente infecciosa?",
    "options": [
      "Fiebre aislada con disnea, tos y esputo sin cambios.",
      "Ortopnea, disnea paroxística nocturna y edema bilateral sin cambios de la tos.",
      "Tos productiva habitual sin variación durante meses.",
      "Aumento de la disnea, de la tos y de la purulencia del esputo durante los últimos tres días."
    ]
  },
  {
    "originalId": "diciembre-2022:39",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "En un adulto inmunocompetente con función renal normal, la pauta oral es de 800 mg cinco veces al día, aproximadamente cada cuatro horas durante la vigilia, por siete días.",
    "o": {
      "A": "Cada doce horas aporta menos tomas que la pauta estándar para función renal normal.",
      "B": "La dosis de 400 mg cada ocho horas no corresponde a la pauta oral de zóster en este adulto.",
      "D": "Cada seis horas son cuatro tomas diarias. Prolongar a catorce días no reproduce la pauta recomendada."
    },
    "src": "AEMPS · Aciclovir 800 mg, ficha técnica, posología para herpes zóster",
    "src_url": "https://cima.aemps.es/cima/pdfs/es/ft/62295/FichaTecnica_62295.html.pdf",
    "stem": "Varón inmunocompetente de 44 años, con función renal normal y herpes zóster torácico localizado de 36 horas de evolución. Se decide iniciar aciclovir por vía oral. ¿Qué pauta corresponde?"
  },
  {
    "originalId": "diciembre-2022:40",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "Una HbA1c mayor de 10 % es un criterio para considerar el inicio de insulina por hiperglucemia marcada. Los síntomas, la pérdida involuntaria de peso y la presencia de cetosis también influyen en la decisión.",
    "o": {
      "A": "Las dificultades con la alimentación requieren abordar barreras concretas y no determinan por sí solas insulinoterapia.",
      "B": "Una glucemia en ayunas de 155 mg/dL está sobre la meta habitual, pero no alcanza el umbral de hiperglucemia marcada propuesto por la ADA.",
      "D": "El tabaquismo eleva el riesgo cardiovascular y requiere intervención específica, pero no determina la indicación de insulina."
    },
    "src": "ADA · Standards of Care in Diabetes 2026, sección 9, tratamiento farmacológico",
    "src_url": "https://diabetesjournals.org/care/article/49/Supplement_1/S183/163934",
    "stem": "En un adulto con DM2 sin crisis hiperglucémica, ¿qué dato por sí solo alcanza uno de los umbrales de la ADA para considerar iniciar insulina por hiperglucemia marcada?",
    "options": [
      "Dificultad para sostener el plan alimentario.",
      "Glucemia en ayunas de 155 mg/dL.",
      "HbA1c de 10,8 %.",
      "Tabaquismo de 40 paquetes-año."
    ]
  },
  {
    "originalId": "diciembre-2022:41",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "Tras la resección completa en una pieza de un adenoma con displasia de alto grado, la primera colonoscopía de vigilancia corresponde a los tres años. Si una lesión de 20 mm o más se reseca en fragmentos, el intervalo inicial suele ser de seis meses.",
    "o": {
      "A": "Cinco años demora el primer control de este adenoma avanzado.",
      "B": "La TC no forma parte de la vigilancia rutinaria de un adenoma sin cáncer invasor y cinco años es un intervalo excesivo.",
      "C": "El control anual no es el intervalo indicado para un único adenoma avanzado con resección completa documentada."
    },
    "src": "US Multi-Society Task Force · Follow-up after colonoscopy and polypectomy, tabla 4",
    "src_url": "https://pmc.ncbi.nlm.nih.gov/articles/7672705/",
    "stem": "Varón de 61 años, sin antecedentes familiares ni síndrome hereditario. En una colonoscopía completa de alta calidad se reseca en una pieza un único adenoma de 3 cm con displasia de alto grado, márgenes libres y sin invasión. ¿Cuándo corresponde la primera colonoscopía de vigilancia?",
    "options": [
      "A los cinco años.",
      "A los cinco años junto con TC de abdomen y pelvis.",
      "Al año.",
      "A los tres años."
    ]
  },
  {
    "originalId": "diciembre-2022:42",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "Richmond explora el interés, la intención y la expectativa de lograr dejar de fumar. Sus respuestas orientan la conversación sobre un intento de cesación.",
    "o": {
      "A": "La dependencia física a la nicotina se explora con el test de Fagerström.",
      "C": "El monóxido de carbono espirado requiere una medición con cooxímetro.",
      "D": "El riesgo cardiovascular requiere datos clínicos y metabólicos que Richmond no recoge."
    },
    "src": "Ministerio de Salud de Colombia · Directrices de cesación del tabaco, anexo 6, test de Richmond",
    "src_url": "https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/directrices-cesacion-consumo-atencion-tabaco.pdf",
    "stem": "En una consulta de cesación tabáquica, ¿qué evalúa el test de Richmond? Las alternativas fueron reconstruidas porque no figuran en el PDF."
  },
  {
    "originalId": "diciembre-2022:43",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "En la acalasia falla la relajación de la unión esofagogástrica y se pierde la peristalsis normal del cuerpo esofágico. En el subtipo III pueden registrarse contracciones prematuras.",
    "o": {
      "A": "El defecto de relajación característico afecta al esfínter inferior, no al superior.",
      "C": "La alteración simultánea de ambos esfínteres no es un requisito diagnóstico.",
      "D": "La relajación inferior conservada con ausencia de contracciones orienta a contractilidad ausente y requiere distinguirla de acalasia."
    },
    "src": "ASGE · Guideline on the management of achalasia, diagnóstico manométrico",
    "src_url": "https://www.asge.org/docs/default-source/guidelines/asge-guideline-on-the-management-of-achalasia-2020-february-gie.pdf",
    "stem": "¿Qué combinación de hallazgos manométricos caracteriza la acalasia?",
    "options": [
      "Relajación deficiente del esfínter superior y pérdida de la peristalsis normal.",
      "Relajación deficiente del esfínter inferior y pérdida de la peristalsis normal.",
      "Falla obligatoria de relajación de ambos esfínteres y pérdida de la peristalsis normal.",
      "Relajación normal del esfínter inferior y ausencia de contracciones en el cuerpo esofágico."
    ]
  },
  {
    "originalId": "diciembre-2022:44",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "A los siete meses, la FC de 148 suma 2 puntos y la FR de 55 suma 2. Las sibilancias inspiratorias y espiratorias con estetoscopio suman 2, y el tiraje con aleteo nasal, 3. El total es 9, correspondiente a obstrucción grave.",
    "o": {
      "A": "Están informadas las cuatro variables de esta versión del puntaje, incluida la edad para interpretar la FR.",
      "B": "La categoría moderada abarca de 5 a 8 puntos. Contar solo el tiraje omitiría el aleteo nasal.",
      "D": "La categoría leve corresponde a 4 puntos o menos."
    },
    "src": "Revista Pediátrica Elizalde · Bronquiolitis (2024), tabla 3, Tal modificado",
    "src_url": "https://apelizalde.org/revistas/2024-1-ARTICULOS/RE_2024_1_PD_2.pdf",
    "stem": "Lactante de siete meses con bronquiolitis, afebril y sin llanto durante la evaluación. FC 148/min, FR 55/min, sibilancias inspiratorias y espiratorias audibles solo con estetoscopio, tiraje generalizado y aleteo nasal. Según la tabla de Tal modificado que utiliza FC, FR por edad, sibilancias y músculos accesorios, ¿cómo se clasifica la obstrucción?"
  },
  {
    "originalId": "diciembre-2022:45",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "El Ministerio recomienda tomar la muestra antes del egreso, preferentemente entre las 48 y las 72 horas. Esta ventana facilita la detección precoz y el tratamiento oportuno.",
    "o": {
      "A": "La toma en las primeras horas no es la ventana preferida para un recién nacido que seguirá internado hasta las 72 horas.",
      "C": "Esperar hasta la segunda semana demora el diagnóstico de enfermedades tratables.",
      "D": "Diferir la muestra al mes retrasa el inicio del tratamiento y aumenta el riesgo de secuelas."
    },
    "src": "Ministerio de Salud de la Nación · Pesquisa neonatal, prueba del talón",
    "src_url": "https://www.argentina.gob.ar/salud/glosario/pesquisaneonatal",
    "stem": "Un recién nacido de término sano permanecerá en la maternidad hasta las 72 horas. ¿En qué momento se prefiere tomar la muestra del talón para la pesquisa neonatal argentina, que incluye hipotiroidismo congénito y fenilcetonuria?",
    "options": [
      "En las primeras seis horas.",
      "Entre las 48 y las 72 horas de vida.",
      "En la segunda semana de vida.",
      "Al cumplir un mes."
    ]
  },
  {
    "originalId": "diciembre-2022:46",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "La combinación de fiebre, edema palpebral, mialgias, eosinofilia y CPK elevada orienta a la fase muscular de la triquinosis. Conviene preguntar por consumo de carne o chacinados sin control sanitario.",
    "o": {
      "A": "La fascitis eosinofílica suele producir edema e induración de las extremidades más que este cuadro febril con edema palpebral.",
      "B": "La esquistosomiasis aguda puede producir fiebre y eosinofilia, pero orienta la exposición a agua dulce en zona endémica y explica peor el patrón muscular.",
      "C": "La hidatidosis suele manifestarse por quistes hepáticos o pulmonares y no por una miositis febril de este tipo."
    },
    "src": "Argentina · Ficha técnica n.º 4, Triquinosis, 2024",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/ficha_triquino.pdf"
  },
  {
    "originalId": "diciembre-2022:47",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "En la fiebre hemorrágica argentina por virus Junín, el plasma inmune de personas recuperadas reduce la mortalidad si se administra durante los primeros ocho días de enfermedad.",
    "o": {
      "A": "En dengue grave se prioriza sostén hemodinámico y manejo del sangrado según indicación.",
      "C": "El plasma inmune contra Junín no trata el síndrome cardiopulmonar por hantavirus.",
      "D": "El tratamiento de la fiebre amarilla es de sostén. El plasma específico de Junín no tiene indicación."
    },
    "src": "Ministerio de Salud de la Nación · Boletín Epidemiológico Nacional 775, fiebre hemorrágica argentina",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/2025/01/ben-775-se_38.pdf",
    "stem": "En la Argentina, ¿para cuál de estas enfermedades se indica plasma inmune específico de convalecientes como tratamiento temprano con beneficio demostrado?"
  },
  {
    "originalId": "diciembre-2022:48",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "El calendario argentino indica una dosis de triple bacteriana acelular de formulación para adolescentes y adultos (dTpa) en el año en que se cumplen los 11 años.",
    "o": {
      "A": "A los seis meses el componente contra coqueluche forma parte del esquema primario del lactante.",
      "B": "Los doce meses no corresponden al refuerzo adolescente con dTpa.",
      "C": "El refuerzo del ingreso escolar corresponde a otra etapa y formulación."
    },
    "src": "Ministerio de Salud de la Nación · Vacuna triple bacteriana acelular, indicaciones del calendario",
    "src_url": "https://www.argentina.gob.ar/salud/vacunas/triplebacterianaacelular",
    "stem": "Según el calendario nacional argentino, ¿a qué edad corresponde el refuerzo adolescente de rutina con dTpa?"
  },
  {
    "originalId": "diciembre-2022:49",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "Una embarazada conviviente de un caso de enfermedad meningocócica invasiva requiere profilaxis cuanto antes. El manual argentino indica ceftriaxona 250 mg IM en dosis única para una adulta embarazada.",
    "o": {
      "A": "Trimetoprima-sulfametoxazol no integra los esquemas recomendados para esta exposición.",
      "C": "La ciprofloxacina puede ser una alternativa en otros adultos según susceptibilidad. Para esta embarazada, la guía indica ceftriaxona."
    },
    "src": "Ministerio de Salud · Manual de vigilancia de eventos de notificación obligatoria 2026, quimioprofilaxis meningocócica, tabla 2",
    "src_url": "https://salud.neuquen.gob.ar/wp-content/uploads/2026/03/Manual-de-normas-2026_VF-1.pdf",
    "stem": "Embarazada de 27 años, sin alergias, conviviente de una persona con meningitis meningocócica confirmada. Según el manual argentino de vigilancia, ¿qué quimioprofilaxis corresponde?",
    "options": [
      "Trimetoprima-sulfametoxazol por vía oral.",
      "Ceftriaxona 250 mg intramuscular, dosis única.",
      "Ciprofloxacina 500 mg por vía oral como primera elección en el embarazo."
    ]
  },
  {
    "originalId": "diciembre-2022:50",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "En una primera convulsión se solicita ayuda de emergencia, se apartan objetos peligrosos, se protege la cabeza y se controla la duración. Al ceder las sacudidas se evalúa la respiración y, si respira, se coloca a la persona de costado.",
    "o": {
      "B": "Forzar la apertura de la boca puede lesionar dientes y tejidos, además de exponer al rescatista a mordeduras.",
      "C": "Sujetar las extremidades no interrumpe la descarga y puede causar lesiones.",
      "D": "Dar comprimidos o líquidos durante la crisis implica riesgo de aspiración."
    },
    "src": "Epilepsy Foundation · Primeros auxilios para crisis epilépticas",
    "src_url": "https://www.epilepsy.com/espanol/primeros-auxilios-para-crisis-epilepticas",
    "stem": "Presenciás la primera crisis tónico-clónica de un adulto en la vía pública. ¿Cuál es la conducta inicial de primeros auxilios?"
  },
  {
    "originalId": "diciembre-2022:51",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "La exposición al humo con cefalea y mareos justifica retirar al paciente de la fuente y administrar oxígeno al 100 % con máscara con reservorio, mientras se evalúan vía aérea, respiración y circulación. La lucidez no excluye intoxicación.",
    "o": {
      "B": "Un broncodilatador puede ayudar si hay broncoespasmo, pero no acelera la eliminación del CO.",
      "C": "La persistencia de síntomas tras el incendio exige oxígeno y evaluación médica.",
      "D": "La determinación de carboxihemoglobina ayuda a confirmar la exposición, pero no debe demorar la oxigenoterapia."
    },
    "src": "CDC · Clinical Guidance for Carbon Monoxide Poisoning, tratamiento inicial",
    "src_url": "https://www.cdc.gov/carbon-monoxide/hcp/clinical-guidance/index.html"
  },
  {
    "originalId": "diciembre-2022:52",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "La hematuria glomerular con cilindros hemáticos, edema e hipertensión corresponde a un síndrome nefrítico. Los eritrocitos dismórficos ayudan a localizar el origen del sangrado.",
    "o": {
      "A": "El tumor testicular suele manifestarse por una masa escrotal y no produce cilindros hemáticos.",
      "C": "La uretritis gonocócica suele causar secreción y disuria, sin sedimento glomerular.",
      "D": "El cólico renal puede causar hematuria con dolor lumbar, pero no explica los cilindros hemáticos ni el edema."
    },
    "src": "Manual MSD profesional · Generalidades sobre el síndrome nefrítico, sedimento urinario",
    "src_url": "https://www.msdmanuals.com/es/professional/nefrolog%C3%ADa/glomerulopat%C3%ADas/generalidades-sobre-el-s%C3%ADndrome-nefr%C3%ADtico",
    "stem": "Varón de 42 años con orina color té sin coágulos, edema de miembros inferiores y TA 150/95 mmHg. El sedimento muestra eritrocitos dismórficos y cilindros hemáticos. ¿Qué síndrome explica el cuadro?"
  },
  {
    "originalId": "diciembre-2022:53",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "Una CVF baja con relación VEF1/CVF conservada sugiere restricción. Para confirmarla se necesita una capacidad pulmonar total por debajo del límite inferior de normalidad.",
    "o": {
      "A": "La CVF está por debajo del límite inferior de normalidad.",
      "B": "La obstrucción se identifica por una relación VEF1/CVF reducida.",
      "C": "Un trastorno mixto requiere obstrucción y una capacidad pulmonar total reducida. Ninguna de las dos está documentada aquí."
    },
    "src": "ERS/ATS · Technical standard on interpretive strategies for routine lung function tests, volúmenes pulmonares",
    "src_url": "https://erj.ersjournals.com/content/erj/60/1/2101499.full.pdf",
    "stem": "Espirometría aceptable y reproducible: CVF por debajo del límite inferior de normalidad y relación VEF1/CVF por encima de ese límite. No se midieron volúmenes pulmonares. ¿Cómo informás el hallazgo?",
    "options": [
      "Espirometría normal.",
      "Defecto obstructivo confirmado.",
      "Trastorno mixto confirmado.",
      "Posible restricción que requiere medir la capacidad pulmonar total."
    ]
  },
  {
    "originalId": "diciembre-2022:54",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "La elevación leve e intermitente de bilirrubina no conjugada, con enzimas hepáticas normales y sin hemólisis, es característica de Gilbert. El ayuno puede hacerla más evidente.",
    "o": {
      "A": "Dubin-Johnson produce hiperbilirrubinemia predominantemente conjugada.",
      "C": "En la colestasis suelen elevarse la fosfatasa alcalina y la fracción conjugada.",
      "D": "La pancreatitis crónica no explica por sí misma la elevación indirecta aislada. Si obstruye la vía biliar, el patrón es colestásico."
    },
    "src": "Manual MSD profesional · Trastornos congénitos del metabolismo de la bilirrubina, síndrome de Gilbert",
    "src_url": "https://www.msdmanuals.com/es/professional/trastornos-hep%C3%A1ticos-y-biliares/abordaje-del-paciente-con-hepatopat%C3%ADas/trastornos-cong%C3%A9nitos-del-metabolismo-causantes-de-hiperbilirrubinemia",
    "stem": "Adulto joven asintomático con episodios de bilirrubina total de 2,4 mg/dL, de predominio indirecto, más notorios en ayunas. Transaminasas, fosfatasa alcalina, hemograma y estudios de hemólisis normales. ¿Cuál es el diagnóstico más probable?"
  },
  {
    "originalId": "diciembre-2022:55",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "Es incorrecto atribuirle origen en el facial. El schwannoma vestibular suele originarse en la porción vestibular del VIII par. El VII par puede afectarse por compresión cuando el tumor crece.",
    "o": {
      "A": "La hipoacusia neurosensorial unilateral o asimétrica de instalación progresiva es una presentación habitual.",
      "C": "Los acúfenos pueden acompañar la pérdida auditiva del mismo lado.",
      "D": "El compromiso vestibular puede causar inestabilidad. La intensidad es variable."
    },
    "src": "EANO · Guideline on the diagnosis and treatment of vestibular schwannoma, presentación clínica",
    "src_url": "https://www.eano.eu/publications/eano-guidelines/eano-guideline-on-the-diagnosis-and-treatment-of-vestibular-schwannoma/",
    "stem": "Acerca del schwannoma vestibular, también llamado neurinoma acústico, ¿cuál es el enunciado INCORRECTO?",
    "options": [
      "Puede presentarse con hipoacusia neurosensorial unilateral progresiva.",
      "Se origina habitualmente en el nervio facial (VII par).",
      "Puede producir acúfenos ipsilaterales.",
      "Puede acompañarse de alteración del equilibrio."
    ]
  },
  {
    "originalId": "diciembre-2022:56",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "Es incorrecto afirmar que el seno cavernoso carece de estructuras nerviosas relevantes. Las lesiones de esta región pueden asociar oftalmoplejía y trastornos sensitivos faciales.",
    "o": {
      "A": "La afectación de III, IV o VI puede alterar los movimientos oculares y causar diplopía.",
      "B": "La afectación de V1 puede reducir la sensibilidad corneal y frontal.",
      "C": "III, IV, V1 y V2 se relacionan con la pared lateral. El VI discurre junto a la carótida interna dentro del seno."
    },
    "src": "StatPearls · Cavernous Sinus Syndromes, anatomía y manifestaciones clínicas",
    "src_url": "https://www.ncbi.nlm.nih.gov/books/NBK532976/",
    "stem": "En relación con una lesión del seno cavernoso, ¿cuál de los siguientes enunciados es INCORRECTO?",
    "options": [
      "Puede provocar alteraciones de los movimientos oculares.",
      "Puede disminuir la sensibilidad corneal y frontal.",
      "Puede comprometer los pares III, IV, VI y las divisiones V1 y V2 del trigémino.",
      "No guarda relación con nervios craneales y no produce signos neurológicos."
    ]
  },
  {
    "originalId": "diciembre-2022:57",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "La marcha magnética asociada a deterioro cognitivo, incontinencia y ventriculomegalia orienta a hidrocefalia normotensiva. La mejoría tras evacuar LCR refuerza el diagnóstico. El traumatismo es una causa secundaria posible.",
    "o": {
      "A": "Una hemorragia subaracnoidea aguda suele debutar de manera brusca. No explica por sí sola este patrón crónico con respuesta al drenaje.",
      "C": "En Alzheimer suelen predominar inicialmente las alteraciones de memoria y no se espera esta respuesta de la marcha al drenaje.",
      "D": "Un hematoma subdural crónico puede aparecer después de un traumatismo, pero la imagen mostraría una colección extraaxial."
    },
    "src": "Manual MSD profesional · Normal Pressure Hydrocephalus, diagnóstico y respuesta al drenaje",
    "src_url": "https://www.msdmanuals.com/professional/neurologic-disorders/delirium-and-dementia/normal-pressure-hydrocephalus",
    "stem": "Meses después de un traumatismo craneal, un adulto presenta marcha magnética, deterioro cognitivo e incontinencia. Hay ventriculomegalia y mejoría de la marcha tras evacuar LCR. ¿Diagnóstico más probable?",
    "options": [
      "Hemorragia subaracnoidea",
      "Hidrocefalia normotensiva",
      "Demencia tipo Enfermedad de Alzheimer de inicio tardío",
      "Hematoma subdural crónico"
    ]
  },
  {
    "originalId": "diciembre-2022:58",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "La TC de cráneo sin contraste es el estudio inicial urgente para detectar sangre subaracnoidea. La sensibilidad es mayor durante las primeras seis horas; ante una TC negativa se considera el tiempo transcurrido y la sospecha clínica.",
    "o": {
      "A": "La radiografía evalúa estructuras óseas y no permite excluir sangrado subaracnoideo.",
      "C": "La RM lumbar no evalúa el sangrado intracraneal agudo.",
      "D": "El Doppler carotídeo estudia los vasos del cuello y no detecta la sangre subaracnoidea."
    },
    "src": "NICE NG228 · Hemorragia subaracnoidea aneurismática, evaluación e imagen diagnóstica",
    "src_url": "https://www.nice.org.uk/guidance/NG228/chapter/recommendations",
    "stem": "Adulta estabilizada tras cefalea en trueno y deterioro de conciencia. ¿Qué imagen solicitar inicialmente ante sospecha de hemorragia subaracnoidea?",
    "options": [
      "Radiografía de cráneo",
      "TC de cráneo sin contraste",
      "RM lumbar",
      "Doppler carotídeo"
    ]
  },
  {
    "originalId": "diciembre-2022:59",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "La afasia y la hemiparesia de una hora son déficits potencialmente discapacitantes. Se activa el código ACV, se evalúa NIHSS, elegibilidad y oclusión de gran vaso. Para trombólisis IV hay que reducir la TA por debajo de 185/110 mmHg antes de administrarla.",
    "o": {
      "B": "Llevar la TA rápidamente a valores normales puede perjudicar la perfusión cerebral y demorar la reperfusión.",
      "C": "La heparina inmediata por fibrilación auricular no reemplaza la reperfusión y aumenta el riesgo de sangrado.",
      "D": "La observación aislada pierde tiempo dentro de la ventana terapéutica."
    },
    "src": "AHA/ASA · Guía 2026 de manejo temprano del ACV isquémico, trombólisis IV y presión arterial",
    "src_url": "https://www.ahajournals.org/doi/10.1161/STR.0000000000000513",
    "stem": "Paciente de 68 años con fibrilación auricular, sin anticoagulación, afasia y hemiparesia derecha de inicio hace una hora. Glucemia normal, TA 200/120 mmHg y TC sin hemorragia. ¿Qué conducta inicial permite evaluar reperfusión de manera segura?",
    "options": [
      "Activar código ACV, cuantificar el déficit y evaluar reperfusión. Si es candidata a trombólisis IV, reducir antes la TA a menos de 185/110 mmHg.",
      "Normalizar la TA antes de activar el equipo de ACV.",
      "Administrar heparina terapéutica de inmediato por la fibrilación auricular.",
      "Esperar la evolución clínica y solicitar solo laboratorio."
    ]
  },
  {
    "originalId": "diciembre-2022:60",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "La IgA antitransglutaminasa tisular (TG2) puede detectarse en suero por la asociación con enfermedad celíaca. El hallazgo confirmatorio típico es el depósito granular de IgA en piel perilesional por inmunofluorescencia directa.",
    "o": {
      "A": "Los anticuerpos frente a componentes de los hemidesmosomas, como BP180, orientan a penfigoide ampollar.",
      "C": "Los anti-ADN de doble cadena se asocian con lupus eritematoso sistémico.",
      "D": "Los anticuerpos antimitocondriales se asocian con colangitis biliar primaria."
    },
    "src": "EADV · Guía S2k de dermatitis herpetiforme, serología e inmunofluorescencia directa",
    "src_url": "https://onlinelibrary.wiley.com/doi/full/10.1111/jdv.17183"
  },
  {
    "originalId": "diciembre-2022:61",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Una úlcera genital previa seguida de exantema no pruriginoso con compromiso palmoplantar orienta a sífilis secundaria. Se solicitan pruebas treponémicas y no treponémicas, se ofrece test de VIH y se evalúa tratamiento oportuno y atención de las parejas.",
    "o": {
      "B": "Una micosis superficial suele presentar descamación u otros signos locales y no explica esta secuencia clínica.",
      "C": "La biopsia puede ser útil si persisten dudas, pero los antecedentes y la distribución justifican evaluar sífilis de entrada.",
      "D": "Los antihistamínicos no tratan la infección ni permiten interrumpir su transmisión."
    },
    "src": "Ministerio de Salud de la Nación · Abordaje de la sífilis en personas adultas, diagnóstico serológico",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/2024/04/abordaje_de_la_sifilis_en_personas_adultas_2662024_0.pdf",
    "stem": "Paciente de 30 años con exantema no pruriginoso en tronco, palmas y plantas. Refiere una úlcera indolora en el glande que desapareció espontáneamente semanas atrás. ¿Cuál es la sospecha y el abordaje diagnóstico inicial?"
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
