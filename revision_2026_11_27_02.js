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
