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
  },
  {
    "originalId": "diciembre-2022:62",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "Eritroplasia de Queyrat es el nombre clínico histórico del carcinoma escamoso in situ del glande. Se presenta típicamente como una placa roja, bien delimitada y aterciopelada.",
    "o": {
      "A": "Bowen es la denominación clásica empleada para la lesión in situ sobre piel del cuerpo del pene.",
      "C": "El melanoma es una neoplasia melanocítica. La biopsia del caso identifica una lesión escamosa.",
      "D": "El condiloma acuminado suele ser una lesión exofítica por VPH y no equivale a carcinoma escamoso in situ."
    },
    "src": "National Cancer Institute · Penile Cancer Treatment (PDQ), carcinoma in situ",
    "src_url": "https://www.cancer.gov/types/penile/hp/penile-treatment-pdq",
    "stem": "La biopsia de una placa roja aterciopelada del glande muestra carcinoma escamoso in situ. ¿Cuál es la denominación clínica clásica para esta localización?"
  },
  {
    "originalId": "diciembre-2022:63",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Las pápulas perladas con depresión central son características del molusco contagioso. El rascado puede favorecer su extensión por autoinoculación y algunas lesiones se inflaman.",
    "o": {
      "B": "La varicela da brotes agudos de vesículas, pápulas y costras en diferentes estadios.",
      "C": "En el impétigo no ampollar se esperan erosiones y costras melicéricas.",
      "D": "La escabiosis suele dar prurito nocturno y surcos. La umbilicación de pápulas perladas orienta a otro diagnóstico."
    },
    "src": "CDC · Clinical Overview of Molluscum Contagiosum, presentación clínica",
    "src_url": "https://www.cdc.gov/molluscum-contagiosum/hcp/clinical-overview/",
    "stem": "Niña de cinco años con un mes de evolución de pápulas perladas con umbilicación central en cuello, tórax y cara. Algunas están eritematosas y pican. ¿Cuál es el diagnóstico más probable?"
  },
  {
    "originalId": "diciembre-2022:64",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "El zóster suele comenzar con dolor, ardor o prurito localizado y luego aparecen vesículas agrupadas en un dermatoma, habitualmente de un solo lado y sin cruzar la línea media.",
    "o": {
      "B": "Las vesículas generalizadas en distintos estadios son típicas de varicela primaria.",
      "C": "Un exantema maculopapular difuso con descamación no reproduce la distribución segmentaria del zóster.",
      "D": "Las pápulas perladas umbilicadas sugieren molusco contagioso."
    },
    "src": "CDC · Clinical Features of Shingles, distribución del exantema",
    "src_url": "https://www.cdc.gov/shingles/hcp/clinical-signs/"
  },
  {
    "originalId": "diciembre-2022:65",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "El drenaje controla el foco purulento. Ante celulitis extensa que requiere antibiótico, la clindamicina oral cubre el SAMR documentado como sensible y también los estreptococos. El D-test negativo descarta resistencia inducible en el aislamiento estudiado.",
    "o": {
      "A": "La cefalexina puede tratar infecciones por estafilococo sensible a meticilina, pero no es activa frente a este SAMR.",
      "B": "La penicilina común no ofrece cobertura eficaz contra este SAMR.",
      "D": "La amoxicilina sola tampoco es activa contra el aislamiento resistente a meticilina."
    },
    "src": "Consenso argentino · Guía de manejo de las infecciones de piel y partes blandas, infecciones purulentas",
    "src_url": "https://sad.org.ar/wp-content/uploads/2025/06/Guia-de-manejo-de-las-Infecciones-de-Piel-y-Partes-Blandas.pdf",
    "stem": "Adulto estable con forúnculo drenado y celulitis circundante extensa, apto para tratamiento oral. El cultivo informa Staphylococcus aureus resistente a meticilina (SAMR), sensible a clindamicina, con D-test negativo. ¿Cuál de las opciones cubre el aislamiento?"
  },
  {
    "originalId": "diciembre-2022:66",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "Antes de un procedimiento endourológico que lesione la mucosa se indica urocultivo y, si hay bacteriuria, tratamiento dirigido perioperatorio para reducir el riesgo de sepsis.",
    "o": {
      "A": "La edad avanzada y la institucionalización solas no justifican buscar bacteriuria en una persona asintomática.",
      "B": "La diabetes por sí sola no es indicación de pesquisa ni tratamiento de bacteriuria asintomática.",
      "D": "La colonización es frecuente con sonda crónica. Sin síntomas ni procedimiento traumático previsto, buscarla de rutina lleva a tratamientos innecesarios."
    },
    "src": "IDSA · Asymptomatic Bacteriuria, secciones IV, VI y XIII",
    "src_url": "https://www.idsociety.org/practice-guideline/asymptomatic-bacteriuria/",
    "stem": "Entre estas personas adultas no embarazadas, sin síntomas urinarios, ¿en quién está indicado buscar bacteriuria asintomática?",
    "options": [
      "Persona de 80 años institucionalizada.",
      "Persona con diabetes tipo 2 en control.",
      "Paciente que va a ser sometido a resección transuretral de próstata.",
      "Paciente con sonda vesical crónica sin intervención urológica prevista."
    ]
  },
  {
    "originalId": "diciembre-2022:67",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Para esta formulación de nitrofurantoína, en una mujer con cistitis localizada y función renal adecuada, la pauta es 100 mg por vía oral cada 12 horas durante cinco días.",
    "o": {
      "B": "El esquema en dosis única corresponde a otros tratamientos, como fosfomicina trometamol, no a esta formulación.",
      "C": "La administración semanal no trata un episodio agudo de cistitis.",
      "D": "Una sola toma diaria durante un día no completa el tratamiento."
    },
    "src": "EAU · Pocket Guidelines on Urological Infections 2026, esquemas para cistitis",
    "src_url": "https://d56bochluxqnz.cloudfront.net/documents/pocket-guidelines/EAU-Pocket-on-Urological-Infections-2026_2026-04-16-075133_jpjp.pdf",
    "stem": "Mujer no embarazada con cistitis localizada, función renal conservada y sin fiebre. Se elige nitrofurantoína monohidrato/macrocristales de 100 mg. ¿Qué pauta corresponde?",
    "options": [
      "Cada 12 h por 5 días",
      "Una sola dosis",
      "Una dosis semanal",
      "Una vez al día por 24 h"
    ]
  },
  {
    "originalId": "diciembre-2022:68",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "El paciente reúne los cuatro criterios de Centor. En un adulto sin signos virales claros, los CDC recomiendan confirmación microbiológica. Un test rápido positivo indica tratamiento y, si es negativo, no se requiere cultivo de respaldo de rutina.",
    "o": {
      "A": "El exudado, la fiebre y las adenopatías dolorosas sin tos justifican investigar estreptococo del grupo A.",
      "B": "El puntaje estima probabilidad y no confirma por sí solo la etiología.",
      "D": "Un test rápido positivo ya confirma la infección. Esperar además un cultivo retrasa innecesariamente el tratamiento."
    },
    "src": "CDC · Clinical Guidance for Group A Streptococcal Pharyngitis, pruebas y tratamiento",
    "src_url": "https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html",
    "stem": "Adulto de 22 años con fiebre de 38,5 °C, exudado amigdalino, adenopatías cervicales anteriores dolorosas y ausencia de tos. Sin síntomas virales claros ni complicaciones. Hay test rápido de antígeno disponible. Según los CDC, ¿qué conducta corresponde?",
    "options": [
      "Descartar etiología estreptocócica solo por la edad.",
      "Indicar antibiótico sin realizar prueba por el puntaje de Centor.",
      "Realizar el test rápido y tratar si es positivo.",
      "Si el test rápido es positivo, esperar siempre un cultivo confirmatorio antes de tratar."
    ]
  },
  {
    "originalId": "diciembre-2022:69",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "La radiografía cervical es un estudio por imágenes y no forma parte del examen físico. La evaluación clínica se elige según la duración, los desencadenantes y los signos acompañantes.",
    "o": {
      "A": "Romberg es una prueba clínica de equilibrio en bipedestación.",
      "B": "Dix-Hallpike es una maniobra posicional para investigar VPPB del canal posterior cuando el cuadro es compatible.",
      "C": "La evaluación de la marcha ayuda a reconocer inestabilidad y posibles signos centrales."
    },
    "src": "Diagnosis and treatment of vertigo and dizziness · Guía interdisciplinaria de práctica clínica, examen a pie de cama",
    "src_url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12672759/"
  },
  {
    "originalId": "diciembre-2022:70",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "El sucralfato forma un complejo adherente sobre la superficie ulcerada y la protege del contenido gástrico. Esa acción local permite distinguirlo de los fármacos antisecretores.",
    "o": {
      "A": "La metoclopramida es antiemética y procinética, con antagonismo dopaminérgico.",
      "B": "La famotidina bloquea receptores H2 y reduce la secreción ácida.",
      "C": "El omeprazol inhibe la bomba de protones de la célula parietal."
    },
    "src": "Servizo Galego de Saúde · Sucralfato, ficha de producto, mecanismo de acción",
    "src_url": "https://www.sergas.gal/Asistencia-sanitaria/Documents/296/SUCRALFATO.pdf",
    "stem": "¿Cuál de estos fármacos protege una úlcera por formación de una barrera adherente sobre la lesión?",
    "options": [
      "Metoclopramida",
      "Famotidina",
      "Omeprazol",
      "Sucralfato"
    ]
  },
  {
    "originalId": "diciembre-2022:71",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "En el primer episodio no fulminante se prefiere fidaxomicina cuando está disponible. La vancomicina oral, 125 mg cada seis horas durante diez días, es una alternativa aceptada.",
    "o": {
      "A": "El metronidazol no es de elección cuando se dispone de vancomicina oral.",
      "C": "La ciprofloxacina no trata esta infección y las fluoroquinolonas pueden favorecerla.",
      "D": "La amoxicilina tampoco constituye tratamiento específico y puede agravar la alteración de la microbiota."
    },
    "src": "IDSA/SHEA · Guía de infección por Clostridioides difficile, actualización 2021, episodio inicial",
    "src_url": "https://www.idsociety.org/practice-guideline/clostridioides-difficile-2021-focused-update/",
    "stem": "Adulto con primer episodio confirmado de infección por Clostridioides difficile, sin shock, íleo ni megacolon. No hay fidaxomicina, pero se dispone de vancomicina oral. ¿Qué tratamiento corresponde?",
    "options": [
      "Metronidazol como primera elección pese a disponer de vancomicina oral.",
      "Vancomicina oral 125 mg cada seis horas durante diez días.",
      "Ciprofloxacina oral.",
      "Amoxicilina oral."
    ]
  },
  {
    "originalId": "diciembre-2022:72",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Con CD4 de 75 células/mm³ está indicada la profilaxis primaria de neumonía por Pneumocystis jirovecii. La trimetoprima-sulfametoxazol es la opción preferida si se tolera.",
    "o": {
      "B": "La prevención de tuberculosis utiliza otros esquemas y requiere evaluar exposición, infección y enfermedad activa.",
      "C": "La prevención específica frente a neumococo incluye vacunación. El recuento de CD4 señalado no indica profilaxis primaria dirigida a neumococo con este esquema.",
      "D": "Puede usarse profilaxis antibiótica en personas seleccionadas con ITU recurrente, pero ese antecedente está ausente en este caso."
    },
    "src": "NIH · Pneumocystis Pneumonia, prevención del primer episodio en adultos con VIH",
    "src_url": "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/pneumocystis",
    "stem": "Adulto con VIH recién diagnosticado, CD4 de 75 células/mm³, sin síntomas respiratorios ni antecedentes de infecciones urinarias recurrentes. ¿Qué infección se busca prevenir específicamente por este grado de inmunosupresión al iniciar profilaxis primaria con trimetoprima-sulfametoxazol?"
  },
  {
    "originalId": "diciembre-2022:73",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Después de la infección mucocutánea, el virus herpes simple establece latencia en neuronas de ganglios sensitivos, como el trigeminal o los ganglios sacros, según el territorio afectado.",
    "o": {
      "B": "La médula ósea no es el reservorio neuronal característico del herpes simple.",
      "C": "El hígado puede afectarse en enfermedad diseminada, pero no es el sitio típico de latencia.",
      "D": "Los ganglios linfáticos participan en la respuesta inmunitaria. Son estructuras distintas de los ganglios sensitivos."
    },
    "src": "Medical Microbiology · Persistent Viral Infections, latencia de herpes simple",
    "src_url": "https://www.ncbi.nlm.nih.gov/books/NBK8538/",
    "stem": "Tras la primoinfección mucocutánea por el virus herpes simple, ¿dónde establece su latencia característica?"
  },
  {
    "originalId": "diciembre-2022:74",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "El antígeno es el toxoide tetánico: toxina inactivada que conserva capacidad de inducir anticuerpos neutralizantes. Esto genera inmunidad activa contra los efectos de la toxina.",
    "o": {
      "B": "La vacuna no administra bacterias vivas atenuadas.",
      "C": "No se utiliza la bacteria entera inactivada como componente antitetánico.",
      "D": "La inmunoglobulina aporta anticuerpos ya formados y confiere protección pasiva transitoria."
    },
    "src": "Ministerio de Salud de la Nación · Recomendaciones Nacionales de Vacunación, vacunas con componente antitetánico",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/bancos/2018-10/0000000451cnt-2013-06_recomendaciones-vacunacion-argentina-2012.pdf"
  },
  {
    "originalId": "diciembre-2022:75",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Cuando está indicado documentar respuesta, se cuantifica anti-HBs uno a dos meses después de la última dosis. Tras un esquema completo, un resultado de al menos 10 mUI/mL indica respuesta protectora.",
    "o": {
      "B": "El HBsAg es un marcador de infección actual, no de respuesta protectora a la vacuna.",
      "C": "El anti-HBc indica exposición al virus. La vacuna de antígeno de superficie no lo induce.",
      "D": "El HBeAg se relaciona con replicación viral y no evalúa inmunidad posvacunal."
    },
    "src": "Academia Nacional de Medicina de Buenos Aires · Vacunación contra hepatitis virales en la Argentina, serología posvacunación",
    "src_url": "https://anm.edu.ar/recurso/vacunacion-contra-hepatitis-virales-en-la-argentina/",
    "stem": "En una trabajadora de salud con exposición ocupacional a sangre, se necesita documentar la respuesta tras completar la vacunación contra hepatitis B. ¿Qué marcador se solicita?"
  },
  {
    "originalId": "diciembre-2022:76",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Si la médula conserva su capacidad de respuesta, la destrucción periférica de eritrocitos estimula la eritropoyesis y eleva el recuento de reticulocitos. Ese aumento caracteriza una anemia regenerativa.",
    "o": {
      "B": "La carencia de folato o vitamina B12 produce eritropoyesis ineficaz y una respuesta reticulocitaria inadecuada antes del tratamiento.",
      "C": "La infiltración leucémica puede desplazar la hematopoyesis normal y reducir la producción eritroide.",
      "D": "La falta de eritropoyetina disminuye el estímulo para producir eritrocitos."
    },
    "src": "Manual MSD profesional · Generalidades sobre la anemia hemolítica, respuesta reticulocitaria",
    "src_url": "https://www.msdmanuals.com/es/professional/hematolog%C3%ADa/anemias-causadas-por-hem%C3%B3lisis/generalidades-sobre-la-anemia-hemol%C3%ADtica"
  },
  {
    "originalId": "diciembre-2022:77",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "La TA de 140/90 mmHg confirmada en dos controles antes de las 20 semanas se clasifica como hipertensión crónica, aunque la paciente desconociera el antecedente.",
    "o": {
      "A": "El valor alcanza el umbral diagnóstico y se repite al día siguiente.",
      "B": "La hipertensión gestacional se inicia a partir de las 20 semanas en una paciente previamente normotensa.",
      "D": "La presentación habitual de preeclampsia es desde las 20 semanas, con proteinuria o signos de disfunción orgánica. El caso no aporta esos hallazgos."
    },
    "src": "SAHA, SAC y FAC · Consenso Argentino de Hipertensión Arterial 2025, hipertensión en el embarazo",
    "src_url": "https://www.saha.org.ar/uploads/pdf/1760367723.pdf"
  },
  {
    "originalId": "diciembre-2022:78",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "Los episodios súbitos de dolor con flexión de las piernas, palidez y somnolencia entre crisis a los diez meses sugieren invaginación intestinal. Los vómitos y las deposiciones inicialmente blandas pueden preceder al sangrado. Requiere evaluación urgente y ecografía.",
    "o": {
      "A": "La alergia a la proteína de leche puede producir síntomas digestivos, pero explica peor los accesos bruscos con palidez y letargo.",
      "C": "Los cólicos habituales comienzan en los primeros meses y no justifican este cuadro agudo a los diez meses.",
      "D": "La apendicitis suele causar dolor progresivo y más persistente. El patrón paroxístico favorece invaginación."
    },
    "src": "Royal Children’s Hospital Melbourne · Intussusception, presentación clínica",
    "src_url": "https://www.rch.org.au/clinicalguide/guideline_index/intussusception_guideline/"
  },
  {
    "originalId": "diciembre-2022:79",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "En un adulto de 75 kg corresponde ceftriaxona 500 mg IM en dosis única para gonococo. Mientras no se descarte clamidia se agrega doxiciclina 100 mg por vía oral cada doce horas durante siete días.",
    "o": {
      "A": "Una única dosis de doxiciclina no completa el tratamiento recomendado para posible clamidia.",
      "B": "La ciprofloxacina empírica no ofrece cobertura confiable del gonococo sin sensibilidad documentada.",
      "C": "Agregar azitromicina a ciprofloxacina no resuelve la falta de cobertura gonocócica empírica confiable."
    },
    "src": "Guía argentina de recomendaciones de diagnóstico y tratamiento de las ITS · Infección gonocócica no complicada",
    "src_url": "https://sad.org.ar/wp-content/uploads/2025/06/Guia-de-recomendaciones-de-diagnostico-y-tratamiento-de-las-Infecciones-de-Transmision-Sexual.pdf",
    "stem": "Varón de 75 kg con uretritis purulenta y diplococos gramnegativos intracelulares en el exudado. Se tomaron muestras para gonococo y clamidia. No tiene alergias y aún no se descartó clamidia. ¿Qué tratamiento inicial corresponde?",
    "options": [
      "Ceftriaxona 500 mg IM más una sola dosis oral de doxiciclina.",
      "Ciprofloxacina 500 mg cada 12 horas por siete días.",
      "Ciprofloxacina por siete días más azitromicina 1 g en dosis única.",
      "Ceftriaxona 500 mg IM una vez más doxiciclina 100 mg VO cada 12 horas por siete días."
    ]
  },
  {
    "originalId": "diciembre-2022:80",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "El IAM con elevación persistente del ST de cuatro horas requiere reperfusión inmediata. Con hemodinamia disponible en el plazo indicado, corresponde activar angioplastia primaria junto con el tratamiento antitrombótico apropiado.",
    "o": {
      "A": "El betabloqueante, la aspirina y la enoxaparina no sustituyen la apertura urgente de la arteria ocluida.",
      "B": "La antiagregación y la estatina forman parte del manejo. Los nitratos alivian síntomas, pero esta combinación sola no reperfunde la arteria.",
      "C": "Se considera fibrinólisis si no puede realizarse angioplastia primaria a tiempo y no hay contraindicaciones."
    },
    "src": "Sociedad Argentina de Cardiología · Consenso de emergencias cardiovasculares, mayo de 2026, algoritmo de SCACEST",
    "src_url": "https://www.sac.org.ar/wp-content/uploads/2026/05/Consenso-emergencias-cardiovasculares-8.pdf",
    "stem": "Varón de 65 años con cuatro horas de dolor precordial opresivo y elevación persistente del ST en DI, aVL y V1 a V6. Se confirma IAM con elevación del ST. El centro puede realizar angioplastia dentro de los 90 minutos del primer contacto médico. ¿Cuál es la estrategia de reperfusión preferida?"
  },
  {
    "originalId": "diciembre-2022:81",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "El bupropión disminuye el umbral convulsivo y está contraindicado en personas con epilepsia. En una persona hipertensa también corresponde controlar la presión al evaluar el tratamiento.",
    "o": {
      "B": "La hiperglucemia en ayunas aislada no es una contraindicación absoluta para el bupropión.",
      "C": "La displasia mamaria no es una contraindicación específica para este medicamento.",
      "D": "La dislipemia requiere manejo cardiovascular, pero no contraindica por sí sola el bupropión."
    },
    "src": "Ministerio de Salud de la Nación · Guía nacional de tratamiento de la adicción al tabaco, versión breve 2024, bupropión",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/2023/10/gpc-tabaco-breve-08-2024_2392024-2.pdf"
  },
  {
    "originalId": "diciembre-2022:82",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Ante la rotura del preservativo hace 12 horas, puede tomar levonorgestrel 1,5 mg en una dosis cuanto antes. La migraña, el tabaquismo y el propranolol no contraindican este método de emergencia sin estrógeno.",
    "o": {
      "B": "Un único comprimido de 0,75 mg aporta la mitad de la dosis total.",
      "C": "Las precauciones que se aplican a ciertos anticonceptivos con estrógeno no impiden usar levonorgestrel de emergencia.",
      "D": "No se requieren análisis de rutina antes de administrarlo. Esperar demoraría el acceso."
    },
    "src": "AMAdA · Consenso de anticoncepción de emergencia 2026, anticonceptivos orales de emergencia",
    "src_url": "https://amada.org.ar/images/AMAdA_Consenso_de_anticoncepcion_de_emergencia_2026.pdf"
  },
  {
    "originalId": "diciembre-2022:83",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "Los CDC estiman que, de tres a seis años después de dejar de fumar, el exceso de riesgo de enfermedad coronaria cae aproximadamente a la mitad. La referencia es el exceso atribuible al tabaco, y cada desenlace cardiovascular tiene su propia evolución.",
    "o": {
      "A": "Durante los primeros meses ya hay beneficios respiratorios, pero ese no es el intervalo señalado para el desenlace preguntado.",
      "B": "El riesgo de infarto comienza a bajar con rapidez en los primeros años. Eso no equivale al plazo que la fuente asigna a la mitad del exceso coronario.",
      "D": "Aproximadamente a los quince años el riesgo coronario se acerca al de una persona que no fuma."
    },
    "src": "CDC · Benefits of Quitting Smoking, cronología del riesgo coronario",
    "src_url": "https://www.cdc.gov/tobacco/about/benefits-of-quitting.html",
    "stem": "Según la cronología de los CDC, ¿en qué intervalo después de dejar de fumar cae aproximadamente a la mitad el exceso de riesgo de enfermedad coronaria atribuible al tabaco?",
    "options": [
      "A los seis meses.",
      "Al cumplirse un año.",
      "Entre los tres y los seis años.",
      "Al cumplirse quince años."
    ]
  },
  {
    "originalId": "diciembre-2022:84",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "A los 70 años la paciente está dentro del grupo de tamizaje mamario y colorrectal. Desde los 65 años también corresponde pesquisa de osteoporosis en mujeres. Se verifica qué estudios están pendientes según los intervalos recomendados.",
    "o": {
      "A": "La pesquisa de aneurisma de aorta abdominal no se recomienda en una mujer que nunca fumó y no tiene antecedente familiar.",
      "B": "Con pesquisa cervical previa adecuada y sin factores de alto riesgo, después de los 65 años no se indica continuarla de rutina.",
      "C": "Mama y colon son correctos, pero la pesquisa aórtica no se justifica con este perfil."
    },
    "src": "AAFP · Adult Preventive Health Care Schedule, recomendaciones de la USPSTF para mujeres",
    "src_url": "https://www.aafp.org/assets/image/upload/v1780508286/USPSTFHealthCareSchedule2024.pdf",
    "stem": "Mujer asintomática de 70 años, de riesgo promedio, que nunca fumó, sin antecedente familiar de aneurisma aórtico ni fractura por fragilidad. Tiene tamizaje cervical previo adecuado y negativo, sin lesión de alto grado. Según la USPSTF, ¿qué conjunto de pesquisas corresponde considerar según edad e intervalos?",
    "options": [
      "Cáncer de mama y aneurisma de aorta abdominal.",
      "Cáncer de mama, cáncer colorrectal y cáncer de cuello uterino.",
      "Cáncer de mama, cáncer colorrectal y aneurisma de aorta abdominal.",
      "Cáncer de mama, cáncer colorrectal y osteoporosis."
    ]
  },
  {
    "originalId": "diciembre-2022:85",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "Una mordedura transdérmica por un animal no disponible en un área con circulación de rabia canina constituye una exposición grave. En una persona sin vacunación antirrábica previa, corresponde iniciar vacuna e inmunoglobulina, con infiltración de la herida según el protocolo.",
    "o": {
      "A": "La vacuna sola omite la inmunoglobulina indicada para esta exposición grave en una persona no inmunizada.",
      "C": "La inmunoglobulina aporta protección pasiva transitoria y no sustituye el esquema activo de vacunación.",
      "D": "La observación del animal no es posible. Esperar su aparición demoraría la profilaxis indicada."
    },
    "src": "Ministerio de Salud de la Nación · Lineamientos de vacuna antirrábica, profilaxis posexposición según categoría",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/bancos/2018-10/0000000794cnt-2012-03-15_lineamientos-antirrabica.pdf",
    "stem": "Niño de siete años con mordedura profunda en la mano por un perro desconocido que no pudo localizarse, en un área con circulación confirmada de rabia canina. Nunca recibió vacuna antirrábica. Ya se lavó la herida y se evaluaron la profilaxis bacteriana y la antitetánica. ¿Qué profilaxis específica contra la rabia corresponde iniciar ahora?",
    "options": [
      "Únicamente vacuna antirrábica.",
      "Vacuna antirrábica más inmunoglobulina antirrábica.",
      "Solo inmunoglobulina antirrábica.",
      "Esperar diez días por si aparece el perro antes de iniciar profilaxis."
    ]
  },
  {
    "originalId": "diciembre-2022:86",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Con una colonoscopía completa y normal hace cinco años no corresponde repetir ahora el tamizaje de rutina. Entre los 76 y 85 años la decisión futura es individual y considera salud general, estudios previos y preferencias.",
    "o": {
      "B": "La edad por sí sola no imposibilita una colonoscopía ni indica un colon por enema.",
      "C": "La hipertensión y el tabaquismo no ubican al paciente en un programa de vigilancia por pólipos, enfermedad intestinal o predisposición hereditaria.",
      "D": "Agregar sangre oculta durante el intervalo de una colonoscopía normal de calidad no es la estrategia habitual seleccionada."
    },
    "src": "USPSTF · Screening for Colorectal Cancer, adultos de 76 a 85 años e intervalos",
    "src_url": "https://www.uspreventiveservicestaskforce.org/Home/GetFile/1/522/rec-statement-colorectal-cancer-final/pdf",
    "stem": "Varón asintomático de 79 años sin antecedente personal de pólipos, cáncer colorrectal ni enfermedad inflamatoria intestinal, y sin antecedente familiar relevante. Tuvo colonoscopía completa, con preparación adecuada y sin lesiones, hace cinco años. Según la USPSTF, ¿qué conducta corresponde hoy?",
    "options": [
      "No solicitar otro tamizaje ahora y conversar sobre futuros controles según salud, antecedentes de pesquisa y preferencias.",
      "Solicitar colon por enema porque a esta edad está contraindicada la colonoscopía.",
      "Iniciar vigilancia intensiva por ser hipertenso y fumador.",
      "Agregar sangre oculta en materia fecal cada dos años desde ahora."
    ]
  },
  {
    "originalId": "diciembre-2022:87",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "La fiebre alta con tos, coriza y conjuntivitis, seguida de un exantema que comienza en la cara y desciende al tronco, hace sospechar sarampión. El compromiso respiratorio puede acompañar la infección.",
    "o": {
      "A": "La escarlatina suele acompañar una faringitis y produce exantema áspero al tacto.",
      "C": "En la varicela son típicas las vesículas en brotes y en distintos estadios.",
      "D": "La rubéola suele ser más leve y puede acompañarse de adenopatías retroauriculares. Una lesión cutánea retroauricular no equivale a una adenopatía."
    },
    "src": "Ministerio de Salud de la Nación · Sarampión, síntomas y prevención",
    "src_url": "https://www.argentina.gob.ar/salud/sarampion/sintomas"
  },
  {
    "originalId": "diciembre-2022:88",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "Para una persona adulta, la ley reconoce el acceso a las intervenciones previstas mediante su consentimiento informado. El equipo debe brindarle información suficiente sobre el procedimiento, riesgos y alternativas para que pueda decidir.",
    "o": {
      "A": "Una evaluación psiquiátrica para acreditar la identidad no es una condición legal de acceso.",
      "B": "El artículo 11 no exige un diagnóstico de disforia para habilitar el derecho de una persona adulta.",
      "C": "No se requiere autorización judicial ni administrativa para la intervención de una persona adulta."
    },
    "src": "Ley nacional 26.743 · Identidad de género, artículo 11, texto actualizado",
    "src_url": "https://www.argentina.gob.ar/normativa/nacional/ley-26743-197860/actualizacion"
  },
  {
    "originalId": "diciembre-2022:89",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Una lesión periférica accesible por vía percutánea, especialmente en contacto con la pleura, permite obtener tejido mediante una biopsia transtorácica guiada por imágenes. La elección también depende de la seguridad del trayecto y del material necesario.",
    "o": {
      "B": "Una lesión central vecina a grandes vasos exige valorar otras vías y no ofrece el trayecto corto del nódulo subpleural.",
      "C": "Una lesión central visible por vía endobronquial suele ser accesible por broncoscopía.",
      "D": "Un ganglio mediastínico accesible por ecografía endobronquial puede estudiarse por EBUS y aportar información de estadio."
    },
    "src": "NICE NG122 · Lung cancer: diagnosis and management, elección de biopsia",
    "src_url": "https://www.nice.org.uk/guidance/ng122/chapter/diagnosis-and-staging",
    "stem": "Debe obtenerse tejido de una lesión sospechosa de cáncer de pulmón. ¿Cuál de estas localizaciones favorece una biopsia percutánea transtorácica guiada por imágenes, si el trayecto es seguro?",
    "options": [
      "Nódulo pulmonar periférico en contacto con la pleura costal.",
      "Masa hiliar central adyacente a grandes vasos.",
      "Lesión endobronquial central visible por broncoscopía.",
      "Adenopatía mediastínica accesible por ecografía endobronquial."
    ]
  },
  {
    "originalId": "diciembre-2022:90",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "En riesgo habitual se recomiendan 0,4 mg diarios, equivalentes a 400 microgramos, desde antes de la concepción y durante el primer trimestre. El comienzo preconcepcional importa porque el tubo neural cierra temprano.",
    "o": {
      "B": "Dos miligramos superan la dosis habitual de prevención primaria en esta situación.",
      "C": "Cinco miligramos se reservan para situaciones de mayor riesgo, como un embarazo previo afectado por un defecto del tubo neural.",
      "D": "Diez miligramos no son la dosis preventiva de rutina."
    },
    "src": "Ministerio de Salud de la Nación · GPC de atención prenatal de bajo riesgo, suplementación con ácido fólico",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/bancos/2023-07/GPC%20Atenci%C3%B3n%20Prenatal%20de%20Bajo%20Riesgo%202023.pdf",
    "stem": "Una persona planifica un embarazo y no presenta factores de alto riesgo para defectos del tubo neural. ¿Qué dosis diaria de ácido fólico se recomienda para prevención primaria?"
  },
  {
    "originalId": "diciembre-2022:91",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "Para la vigilancia, ETI es una infección respiratoria aguda con fiebre de al menos 38 °C y tos, con inicio de síntomas dentro de los últimos diez días. La definición identifica un síndrome y no confirma por sí sola infección por virus influenza.",
    "o": {
      "A": "No se exige disnea ni taquipnea, que además pueden orientar a compromiso respiratorio más grave.",
      "B": "Las sibilancias no son un requisito de la definición de vigilancia.",
      "D": "La hemoptisis no define ETI y requiere evaluación específica."
    },
    "src": "Ministerio de Salud de la Nación · Guía de vigilancia de infecciones respiratorias agudas 2024, definición de ETI",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/guia_para_la_vigilancia_prevencion_y_control_ira-2024.pdf",
    "stem": "Según la definición argentina de vigilancia, ¿qué cuadro corresponde a enfermedad tipo influenza (ETI)?",
    "options": [
      "Fiebre, disnea y taquipnea obligatorias, aun sin tos.",
      "Fiebre y sibilancias obligatorias, aun sin tos.",
      "Infección respiratoria aguda con fiebre ≥38 °C y tos, iniciada en los últimos diez días.",
      "Fiebre y hemoptisis como requisitos indispensables."
    ]
  },
  {
    "originalId": "diciembre-2022:92",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "La trama de estrías blancas persistentes en la mucosa yugal, que no se desprenden al raspado, es típica del liquen plano oral reticular. Puede ser asintomático.",
    "o": {
      "A": "La leucoplasia suele manifestarse como una placa blanca sin el patrón reticular fino característico.",
      "B": "La mordedura repetida produce una mucosa irregular o desflecada en la línea de oclusión.",
      "C": "Las placas del muguet seudomembranoso suelen desprenderse con el raspado."
    },
    "src": "DermNet · Oral lichen planus, variante reticular",
    "src_url": "https://dermnetnz.org/topics/oral-lichen-planus"
  },
  {
    "originalId": "diciembre-2022:93",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "La ecocardiografía que demuestra regurgitación valvular significativa de aparición nueva, comparada con imágenes previas, constituye un criterio mayor. El mero cambio de intensidad de una insuficiencia preexistente no alcanza este criterio.",
    "o": {
      "B": "La temperatura documentada mayor de 38 °C es un criterio menor.",
      "C": "La glomerulonefritis por inmunocomplejos corresponde a un fenómeno inmunológico, criterio menor.",
      "D": "Una cardiopatía predisponente reconocida se contabiliza como criterio menor."
    },
    "src": "Duke–ISCVID 2023 · Criterios clínicos de endocarditis infecciosa, tabla 2",
    "src_url": "https://thevalveclub.com.br/wp-content/uploads/2024/03/Post513_ciad271.pdf",
    "stem": "Ante sospecha de endocarditis infecciosa, ¿cuál de estos hallazgos es un criterio mayor según Duke–ISCVID 2023?",
    "options": [
      "Regurgitación valvular significativa nueva documentada por ecocardiografía respecto de un estudio previo.",
      "Fiebre documentada mayor de 38 °C.",
      "Glomerulonefritis por inmunocomplejos.",
      "Cardiopatía predisponente."
    ]
  },
  {
    "originalId": "diciembre-2022:94",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "La OMS recomienda entre 14 y 17 horas totales de sueño por día para los primeros tres meses, incluidas las siestas. El intervalo orienta el cuidado y se interpreta junto con la alimentación y la facilidad para despertar al bebé.",
    "o": {
      "A": "Diez a doce horas está por debajo del intervalo recomendado para un recién nacido.",
      "B": "Doce a trece horas tampoco alcanza el límite inferior de la recomendación.",
      "C": "Ocho a diez horas corresponde a una duración mucho menor que la esperada a esta edad."
    },
    "src": "OMS · Sueño en recién nacidos y menores de cinco años, grupo de 0 a 3 meses",
    "src_url": "https://www.who.int/tools/your-life-your-health/life-phase/newborns-and-children-under-5-years/making-sure-newborns-and-children-under-5-years-sleep-safely",
    "stem": "Juan tiene cinco días, se despierta para alimentarse y su examen es normal. Según la OMS, ¿qué duración total de sueño se recomienda en 24 horas, incluidas las siestas?",
    "options": [
      "10 a 12 horas.",
      "12 a 13 horas.",
      "8 a 10 horas.",
      "14 a 17 horas."
    ]
  },
  {
    "originalId": "diciembre-2022:95",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "El linfoma era preexistente y se agravó por los efectos del embarazo. Ese vínculo permite clasificar el fallecimiento como muerte materna indirecta.",
    "o": {
      "B": "La reducibilidad se refiere a posibilidades de prevención y no clasifica la causa como directa o indirecta.",
      "C": "La muerte directa deriva de complicaciones obstétricas, intervenciones u omisiones relacionadas con su manejo.",
      "D": "El momento del fallecimiento no sustituye la clasificación etiológica solicitada."
    },
    "src": "OMS · Guía de referencia de la CIE-11, muertes obstétricas directas e indirectas",
    "src_url": "https://icdcdn.who.int/icd11referenceguide/en-2025-01/refguide.pdf"
  },
  {
    "originalId": "diciembre-2022:96",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "El protocolo nacional recomienda realizar idealmente la PTOG con 75 g entre las semanas 24 y 28. Se determina la glucemia en ayunas y a las dos horas de la carga.",
    "o": {
      "B": "Entre las semanas 20 y 24 no se encuentra la ventana habitual completa para el rastreo programado.",
      "C": "La prueba con 100 g pertenece a otra estrategia diagnóstica y no es la carga del protocolo nacional.",
      "D": "Puede estudiarse más tarde a quien inicia tardíamente sus controles, pero la semana 30 a 32 no es el intervalo ideal de rutina."
    },
    "src": "Ministerio de Salud de la Nación · Protocolo de diagnóstico de diabetes gestacional 2023",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/bancos/2023-08/Protocolo_de_Diabetes_Gestacional_2023.pdf"
  },
  {
    "originalId": "diciembre-2022:97",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "En una internación regida por esta ley, el equipo de salud decide el alta, la externación y los permisos de salida. Si corresponde comunicar la decisión al juez, esa notificación no equivale a solicitar autorización previa.",
    "o": {
      "A": "La decisión no queda exclusivamente en manos del psiquiatra ni exige autorización judicial previa.",
      "B": "El equipo está facultado para decidir sin esperar el permiso del juez.",
      "D": "La ley atribuye la decisión asistencial al equipo de salud. El caso excluye las internaciones en el marco del artículo 34 del Código Penal."
    },
    "src": "Ley nacional 26.657 · Salud mental, artículo 23",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/s2d1.libro_.ley_26.657_salud_mentalweb.pdf",
    "stem": "En una internación de salud mental que no fue dispuesta en el marco del artículo 34 del Código Penal, ¿quién decide el alta, la externación o los permisos de salida según el artículo 23 de la Ley 26.657?",
    "options": [
      "Únicamente el psiquiatra, con autorización del juez.",
      "El equipo de salud, previa autorización judicial.",
      "El equipo de salud, sin autorización judicial previa.",
      "El juez, a propuesta de la familia."
    ]
  },
  {
    "originalId": "diciembre-2022:99",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "La paciente capaz expresó que no autoriza divulgar información. El equipo debe mantener la confidencialidad y puede explicarle al esposo que necesita autorización de ella para compartir datos clínicos.",
    "o": {
      "B": "El vínculo conyugal por sí solo no habilita el acceso a la historia clínica contra la voluntad expresa de una paciente capaz."
    },
    "src": "Ley nacional 26.529 · Derechos del paciente, artículos 2 y 4, texto actualizado",
    "src_url": "https://www.argentina.gob.ar/normativa/nacional/160432/actualizacion"
  },
  {
    "originalId": "diciembre-2022:100",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "La tracción axial seguida de rechazo a usar el brazo, sin tumefacción ni dolor óseo focal, orienta a subluxación de la cabeza radial. Corresponde reducción cerrada, por hiperpronación o supinación-flexión, y reevaluar el uso espontáneo del brazo.",
    "o": {
      "B": "La férula sola no corrige la subluxación. Tras una reducción exitosa con función recuperada no suele ser necesaria.",
      "C": "Esperar sin intentar reducción prolonga el dolor y la limitación funcional.",
      "D": "La derivación se reserva para reducción fallida, presentación atípica o sospecha de otra lesión."
    },
    "src": "Royal Children’s Hospital · Pulled elbow, evaluación y reducción",
    "src_url": "https://www.rch.org.au/clinicalguide/guideline_index/Pulled_elbow/",
    "stem": "Niña de dos años que dejó de usar el brazo después de un tirón de la mano. Mantiene el antebrazo en pronación y el codo levemente flexionado. No hay deformidad, edema ni dolor óseo focal. ¿Cuál es la conducta inicial más apropiada?",
    "options": [
      "Realizar reducción cerrada mediante hiperpronación o supinación-flexión y reevaluar la función.",
      "Colocar una férula posterior sin intentar reducción.",
      "Indicar únicamente observación domiciliaria.",
      "Derivar de rutina a cirugía antes de intentar una reducción."
    ]
  },
  {
    "originalId": "febrero-2023:1",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "El bupropión puede provocar insomnio. Cuando se indican dos tomas, programar la segunda por la tarde, con la separación prescripta y lejos de la hora de acostarse, ayuda a reducirlo.",
    "o": {
      "A": "Los calambres no explican la recomendación específica sobre el horario de la segunda dosis.",
      "C": "La cefalea puede presentarse, pero la medida sobre el horario apunta a evitar alteraciones del sueño.",
      "D": "La diarrea no es el efecto que se busca prevenir al evitar una toma nocturna."
    },
    "src": "Ministerio de Salud de la Nación · Guía de tratamiento de la adicción al tabaco, bupropión de liberación prolongada",
    "src_url": "https://www.asat.org.ar/images/comunidad/publicaciones/guia_nacional.pdf",
    "stem": "Una persona inicia bupropión de liberación prolongada para dejar de fumar. ¿Qué efecto adverso frecuente se intenta reducir al evitar la segunda toma cerca de la hora de acostarse?"
  },
  {
    "originalId": "febrero-2023:2",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "El etambutol puede causar neuropatía óptica con disminución de la agudeza visual y de la discriminación de colores, clásicamente rojo y verde. Un cambio visual nuevo durante el tratamiento requiere evaluación urgente y revisión del fármaco.",
    "o": {
      "A": "La hipoacusia irreversible orienta más a ototoxicidad por aminoglucósidos.",
      "C": "La hepatotoxicidad se asocia más con isoniazida, rifampicina o pirazinamida. La clave para etambutol es la toxicidad visual.",
      "D": "La necrosis tubular es más característica de fármacos nefrotóxicos como los aminoglucósidos. La función renal sí influye en la eliminación del etambutol."
    },
    "src": "Ministerio de Salud de la Nación · Pautas técnicas de tuberculosis en la Argentina, reacciones adversas al etambutol",
    "src_url": "https://panel.aam.org.ar/img_up/24042026.0.pdf",
    "stem": "En una persona que recibe etambutol por tuberculosis, ¿qué toxicidad característica justifica vigilar la agudeza visual y la discriminación de colores?"
  },
  {
    "originalId": "febrero-2023:3",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "La rifampicina puede teñir de naranja rojizo la orina, el sudor y las lágrimas. Es un efecto esperado que conviene anticipar, incluso por la posibilidad de que manche las lentes de contacto blandas.",
    "o": {
      "A": "La hepatotoxicidad puede ocurrir y requiere evaluación. No explica por sí sola la coloración anaranjada habitual de varios fluidos.",
      "B": "La lesión renal aguda es una complicación infrecuente y no un cambio benigno esperado.",
      "D": "La alteración de la visión de colores orienta a toxicidad óptica por etambutol."
    },
    "src": "CDC · Questions and Answers About Tuberculosis, efectos de las rifamicinas",
    "src_url": "https://cdc.gov/tb/media/Question_Answers_About_TB_English.pdf",
    "stem": "Una persona comienza un esquema antituberculoso con rifampicina. ¿Qué cambio benigno y característico de este fármaco conviene anticipar durante la consejería?"
  },
  {
    "originalId": "febrero-2023:4",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "La elevación del ST en V1 a V4 corresponde al territorio anteroseptal en la nomenclatura electrocardiográfica clásica. La ausencia de congestión y de hipoperfusión corresponde a Killip I.",
    "o": {
      "B": "El infarto anterior extenso suele alcanzar más derivaciones precordiales y laterales. Killip II requiere signos de insuficiencia cardíaca.",
      "C": "La cara lateral alta corresponde a DI y aVL. Killip III supone edema agudo de pulmón.",
      "D": "La cara inferior corresponde a DII, DIII y aVF. Killip IV exige shock cardiogénico."
    },
    "src": "Guía para diagnóstico y tratamiento de las personas con síndrome coronario agudo · localización electrocardiográfica y clasificación clínica",
    "src_url": "https://www.binasss.sa.cr/protocolos/sindromecoronario.pdf",
    "stem": "Paciente con IAM con elevación del ST en V1 a V4 y descenso recíproco inferior. Está normotensa y bien perfundida, sin rales, tercer ruido ni ingurgitación yugular. ¿Qué localización electrocardiográfica clásica y clase de Killip corresponden?"
  },
  {
    "originalId": "febrero-2023:5",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Las placas eritematosas crónicas, bien delimitadas, con escamas plateadas y distribución simétrica sobre los codos son características de psoriasis vulgar. La mejoría estival es compatible, aunque no es diagnóstica.",
    "o": {
      "B": "En la sarna costrosa predominan las costras hiperqueratósicas por infestación, a menudo con compromiso de manos y uñas. La morfología de las placas extensoras favorece psoriasis.",
      "C": "El liquen simple crónico produce engrosamiento con acentuación de los pliegues por rascado persistente.",
      "D": "La pitiriasis rosada suele comenzar con una placa heraldo y luego afecta el tronco durante semanas."
    },
    "src": "DermNet · Guidelines for the management of psoriasis, psoriasis crónica en placas",
    "src_url": "https://dermnetnz.org/topics/guidelines-for-the-treatment-of-psoriasis"
  },
  {
    "originalId": "febrero-2023:6",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "La fiebre con dolor retroocular, mialgias, exantema, leucopenia y trombocitopenia orienta a dengue. El dolor abdominal intenso es un signo de alarma y requiere evaluación urgente.",
    "o": {
      "B": "Stevens-Johnson suele presentar lesiones cutáneas dolorosas, erosiones mucosas y desprendimiento epidérmico.",
      "C": "La infección meningocócica también puede producir fiebre y petequias y debe considerarse con urgencia. La combinación de síntomas y citopenias favorece dengue en esta viñeta.",
      "D": "La endocarditis puede producir fiebre y fenómenos cutáneos, pero faltan datos que orienten a un foco endovascular."
    },
    "src": "Ministerio de Salud de la Nación · Guía de práctica clínica sobre diagnóstico y tratamiento del dengue",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/2024/09/gpc_dengue_vc_1012025-652025.pdf"
  },
  {
    "originalId": "febrero-2023:7",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "El colesterol total, el HDL y los triglicéridos, junto con el LDL calculado o medido según corresponda, caracterizan la dislipidemia. Para estimar el riesgo cardiovascular global también se necesitan datos clínicos.",
    "o": {
      "A": "El hemograma informa sobre células sanguíneas y no cuantifica lipoproteínas.",
      "B": "La glucemia aporta información sobre riesgo metabólico, pero no caracteriza la dislipidemia.",
      "C": "La orina completa puede orientar a enfermedad renal y no mide el perfil lipídico."
    },
    "src": "Sociedad Argentina de Cardiología · Consenso de prevención cardiovascular, evaluación de lípidos",
    "src_url": "https://www.sac.org.ar/wp-content/uploads/2024/05/COMPLETO-F-19.pdf",
    "stem": "Adulto de 30 años sin evaluación lipídica previa. ¿Qué estudio caracteriza mejor su perfil de riesgo por dislipidemia?",
    "options": [
      "Hemograma",
      "Glucemia aislada",
      "Orina completa",
      "Perfil lipídico con colesterol total, HDL, triglicéridos y LDL"
    ]
  },
  {
    "originalId": "febrero-2023:8",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "En un recién nacido de término sano suele aparecer después de las primeras 24 horas, predomina la bilirrubina no conjugada y el cuadro es transitorio. La valoración depende de la edad en horas, la bilirrubina y los factores de riesgo.",
    "o": {
      "A": "La ictericia en las primeras 24 horas exige evaluación. El predominio directo también es anormal.",
      "B": "La hiperbilirrubinemia conjugada o el compromiso del estado general requieren investigar enfermedad.",
      "C": "Corresponde sostener y evaluar la lactancia. No se indica suspenderla de rutina."
    },
    "src": "Manual MSD profesional · Hiperbilirrubinemia neonatal, ictericia fisiológica",
    "src_url": "https://www.msdmanuals.com/es/professional/pediatr%C3%ADa/trastornos-metab%C3%B3licos-electrol%C3%ADticos-y-t%C3%B3xicos-en-reci%C3%A9n-nacidos/hiperbilirrubinemia-neonatal"
  },
  {
    "originalId": "febrero-2023:9",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "La otitis media aguda acompañada de conjuntivitis purulenta orienta especialmente a Haemophilus influenzae no tipificable. La secreción ocular cambia la probabilidad etiológica respecto de una otitis aislada.",
    "o": {
      "B": "El neumococo es frecuente en otitis media, pero la asociación con conjuntivitis purulenta favorece H. influenzae.",
      "C": "El rinovirus puede preceder a una otitis como causa de infección respiratoria alta, pero no es el agente típico del síndrome.",
      "D": "El coronavirus puede producir un catarro, pero explica peor la combinación de ambas infecciones purulentas."
    },
    "src": "Canadian Paediatric Society · Management of acute otitis media, síndrome otitis-conjuntivitis",
    "src_url": "https://cps.ca/en/documents/position/acute-otitis-media"
  },
  {
    "originalId": "febrero-2023:10",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "Para evitar reinfestaciones se trata simultáneamente a los convivientes y contactos estrechos. Se lava y seca con calor la ropa, toallas y ropa de cama usadas en los tres días previos. Lo que no pueda lavarse se guarda en una bolsa cerrada durante varios días a una semana.",
    "o": {
      "A": "Cambiar el tipo de fibra no elimina los ácaros ni aborda el contagio entre contactos.",
      "B": "Evitar el baño no previene la reinfestación. Es importante respetar las indicaciones de aplicación del escabicida.",
      "D": "La escabiosis humana se transmite principalmente entre personas. Tratar al perro no sustituye el manejo de los contactos."
    },
    "src": "CDC · Preventing Scabies, tratamiento de convivientes y manejo de ropa",
    "src_url": "https://www.cdc.gov/scabies/prevention/index.html",
    "stem": "Un paciente con escabiosis clásica inicia tratamiento. ¿Qué indicación al hogar reduce el riesgo de reinfestación?",
    "options": [
      "Usar únicamente ropa de algodón.",
      "Evitar los baños durante una semana.",
      "Tratar al mismo tiempo a convivientes y contactos estrechos y descontaminar los textiles de uso reciente.",
      "Tratar solo al perro de la casa."
    ]
  },
  {
    "originalId": "febrero-2023:11",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "La actitud describe cómo se disponen las partes del feto entre sí. La flexión de la cabeza sobre el tórax es un ejemplo.",
    "o": {
      "A": "La posición se refiere a la orientación del punto de referencia fetal respecto de la pelvis materna.",
      "C": "La presentación identifica qué parte fetal se encuentra sobre el estrecho superior.",
      "D": "La situación relaciona el eje longitudinal fetal con el eje longitudinal materno."
    },
    "src": "Oxorn-Foote Human Labor & Birth · Fetopelvic Relationships, actitud fetal",
    "src_url": "https://obgyn.mhmedical.com/content.aspx?bookid=1247&sectionid=75161617"
  },
  {
    "originalId": "febrero-2023:12",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "La detección de antígeno específico o la identificación del parásito en materia fecal confirma giardiasis. Como la eliminación puede ser intermitente, se recomienda recolectar tres muestras en días distintos.",
    "o": {
      "A": "El cloruro en sudor se utiliza para evaluar fibrosis quística, otra causa de malabsorción.",
      "B": "El hemocultivo no es el método para identificar este parásito intestinal.",
      "D": "Los leucocitos fecales no identifican al agente causal."
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
    "originalId": "febrero-2023:13",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "La carga viral plasmática cuantifica el ARN del VIH. Su descenso y posterior supresión permiten evaluar directamente la respuesta virológica al tratamiento.",
    "o": {
      "A": "El antígeno p24 se utiliza en pruebas diagnósticas combinadas y no es el marcador habitual para medir respuesta al tratamiento.",
      "C": "La presencia de anticuerpos en un inmunoblot no cuantifica replicación viral.",
      "D": "Una serología por ELISA puede permanecer reactiva pese a una carga viral suprimida."
    },
    "src": "NIH · Plasma HIV-1 RNA and CD4 Count Monitoring, seguimiento del tratamiento antirretroviral",
    "src_url": "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-arv/plasma-hiv-1-rna-cd4-monitoring"
  },
  {
    "originalId": "febrero-2023:14",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "El aumento en pocos días de la disnea y de la tos con cambios en el esputo encaja en la definición clínica de exacerbación. La purulencia aumenta la sospecha de un desencadenante bacteriano. Puede no haber fiebre.",
    "o": {
      "A": "La fiebre y la astenia sin deterioro respiratorio no definen una exacerbación.",
      "B": "La disnea paroxística nocturna con ortopnea y edema sugiere insuficiencia cardíaca.",
      "C": "El dolor pleurítico súbito con hemoptisis obliga a descartar otras causas, como embolia pulmonar."
    },
    "src": "GOLD 2027 · Informe publicado en noviembre de 2026, capítulo sobre exacerbaciones",
    "src_url": "https://goldcopd.org/wp-content/uploads/2026/11/GOLD-Report-2027-FINAL-v1.1-20Nov2026_WMV.pdf",
    "stem": "Una persona con EPOC describe un cambio respecto de su estado habitual. ¿Qué patrón es más compatible con exacerbación aguda con posible desencadenante infeccioso?",
    "options": [
      "Fiebre y astenia aisladas, con respiración y esputo sin cambios.",
      "Ortopnea y disnea paroxística nocturna con edema en las piernas.",
      "Dolor pleurítico brusco y hemoptisis aislada.",
      "Aumento de disnea, tos y purulencia del esputo en los últimos tres días."
    ]
  },
  {
    "originalId": "febrero-2023:15",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "Las pápulas pequeñas, perladas y con depresión central en la cara y el cuello de un niño son típicas de molusco contagioso.",
    "o": {
      "A": "Las verrugas vulgares suelen tener una superficie áspera e hiperqueratósica.",
      "C": "Las verrugas planas pueden aparecer en la cara, pero tienen una superficie aplanada sin el ombligo central característico.",
      "D": "Los condilomas suelen ser papilomatosos y de localización anogenital."
    },
    "src": "CDC · Clinical Overview of Molluscum Contagiosum, manifestaciones clínicas",
    "src_url": "https://www.cdc.gov/molluscum-contagiosum/hcp/clinical-overview/index.html"
  },
  {
    "originalId": "febrero-2023:16",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "Apertura ocular a la presión E2, sonidos incomprensibles V2 y localización del estímulo M5 suman Glasgow 9. Tras estabilizar al paciente, el Glasgow inicial de 12 o menos indica TC de cráneo dentro de una hora de reconocer el criterio.",
    "o": {
      "A": "Un Glasgow de 15 exige apertura ocular espontánea, orientación verbal y obediencia a órdenes. El alta sería inapropiada.",
      "C": "La suma no es 4 y una radiografía no descarta una lesión intracraneal traumática.",
      "D": "La suma no es 12. Aun con Glasgow 12 inicial estaría indicada la TC urgente."
    },
    "src": "NICE NG232 · Head injury, recomendación 1.5.8, TC en personas de 16 años o más",
    "src_url": "https://www.nice.org.uk/guidance/ng232/chapter/recommendations",
    "stem": "Tras un traumatismo craneal, un adulto abre los ojos a la presión, emite sonidos incomprensibles y localiza el estímulo. ¿Cuál es su Glasgow y qué imagen corresponde tras estabilizarlo?",
    "options": [
      "15 y alta",
      "9 y TC de cráneo urgente",
      "4 y radiografía de cráneo",
      "12 y control ambulatorio"
    ]
  },
  {
    "originalId": "febrero-2023:17",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "El inicio súbito de dolor unilateral intenso en un adolescente con testículo aumentado y doloroso exige sospechar torsión del cordón espermático y activar la evaluación quirúrgica urgente. El signo de Prehn aislado no permite confirmar ni excluir torsión.",
    "o": {
      "A": "La torsión de un apéndice testicular suele generar dolor focal en el polo superior y a veces un punto azulado.",
      "B": "Un varicocele suele palparse como venas dilatadas del cordón. Su trombosis es una explicación menos probable.",
      "C": "La orquiepididimitis puede acompañarse de síntomas urinarios, fiebre o dolor epididimario. No se debe demorar la exclusión de torsión."
    },
    "src": "EAU · Paediatric Urology, Acute Scrotum, diagnóstico y conducta",
    "src_url": "https://uroweb.org/guidelines/paediatric-urology/chapter/acute-scrotum"
  },
  {
    "originalId": "febrero-2023:18",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "El antecedente de infarto junto con diabetes coloca al paciente en prevención secundaria de muy alto riesgo en este consenso. Se busca LDL menor de 55 mg/dL y una reducción de al menos 50 % respecto del basal.",
    "o": {
      "B": "Una meta de 100 mg/dL es insuficiente para este perfil de muy alto riesgo.",
      "C": "Aceptar hasta 130 mg/dL deja un LDL muy superior al objetivo.",
      "D": "Un descenso de solo 10 % no satisface el componente relativo ni garantiza alcanzar la meta absoluta."
    },
    "src": "Sociedad Argentina de Cardiología · Consenso de prevención cardiovascular, tabla de metas lipídicas en prevención secundaria",
    "src_url": "https://www.sac.org.ar/wp-content/uploads/2024/05/Consenso-de-prevencion-cardiovascular.-version-resumida-1-1.pdf",
    "stem": "Varón de 58 años con infarto previo y diabetes tipo 2, tratado con estatina de alta intensidad. Según el Consenso de Prevención Cardiovascular de la Sociedad Argentina de Cardiología, ¿qué meta de LDL corresponde a este perfil de muy alto riesgo?",
    "options": [
      "Menos de 55 mg/dL y una reducción de al menos 50 % respecto del basal.",
      "Menos de 100 mg/dL sin considerar la reducción respecto del basal.",
      "Hasta 130 mg/dL.",
      "Una reducción del 10 % sin meta absoluta."
    ]
  },
  {
    "originalId": "febrero-2023:19",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "A los ocho meses la ansiedad por separación puede ser esperable. Durante la vigilia, un objeto familiar seguro, un cuidador conocido y despedidas breves y previsibles ayudan al bebé a tolerar la ausencia.",
    "o": {
      "A": "Retirar progresivamente todo contacto no favorece una transición segura.",
      "B": "La ansiedad esperable a esta edad no es indicación de estimulación intensiva ni de disminuir el apego.",
      "D": "El consuelo sensible del cuidador ayuda a regular la angustia. No corresponde negarlo de manera sistemática."
    },
    "src": "NHS · Separation anxiety, cómo acompañar las separaciones",
    "src_url": "https://www.nhs.uk/baby/babys-development/behaviour/separation-anxiety/"
  },
  {
    "originalId": "febrero-2023:20",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "La construcción y reparación naval implicaron exposición ocupacional a materiales aislantes con asbesto. Tras una latencia prolongada pueden aparecer placas o engrosamiento pleural difuso. El antecedente orienta la evaluación, sin establecer por sí solo malignidad.",
    "o": {
      "B": "El tabaco se asocia con EPOC y cáncer de pulmón, pero no explica específicamente este patrón pleural ocupacional.",
      "C": "Una pleuritis tuberculosa puede dejar secuelas pleurales, aunque el caso no aporta ese antecedente y sí una exposición laboral característica.",
      "D": "El humo de leña se asocia principalmente a enfermedad de la vía aérea, no a la afección pleural típica del asbesto."
    },
    "src": "ATSDR · Toxicological Profile for Asbestos, exposición ocupacional y efectos pleurales",
    "src_url": "https://www.atsdr.cdc.gov/toxprofiles/tp61.pdf"
  },
  {
    "originalId": "febrero-2023:21",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "El VII par inerva la musculatura de la expresión facial. Su compromiso puede producir escape de líquidos por la comisura y alteración del gusto en los dos tercios anteriores de la lengua por afectación de la cuerda del tímpano.",
    "o": {
      "A": "El IV par inerva el oblicuo superior. Su lesión causa diplopía, no debilidad de la comisura.",
      "B": "El V par participa en la sensibilidad facial y la masticación. No inerva los músculos de la expresión facial.",
      "C": "El VI par inerva el recto lateral y su lesión limita la abducción ocular."
    },
    "src": "Manual MSD profesional · Facial Nerve Palsy, signos y localización",
    "src_url": "https://www.msdmanuals.com/professional/neurologic-disorders/neuro-ophthalmologic-and-cranial-nerve-disorders/facial-nerve-palsy?ruleredirectid=742"
  },
  {
    "originalId": "febrero-2023:22",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "A los dos años, si el niño todavía no sella una boquilla, se prefiere el inhalador presurizado con aerocámara valvulada y máscara facial ajustada. El cuidador administra un disparo por vez y permite varias respiraciones corrientes.",
    "o": {
      "A": "Un dispositivo de polvo seco no se conecta a una aerocámara.",
      "C": "La boquilla requiere un sello labial que este niño todavía no logra.",
      "D": "El polvo seco requiere un flujo inspiratorio que no puede asegurarse a esta edad."
    },
    "src": "GINA 2026 · Niños de cinco años o menos, elección del dispositivo y técnica inhalatoria",
    "src_url": "https://ginasthma.org/wp-content/uploads/2026/05/GINA-2026-Strategy-Report-WMS.pdf",
    "stem": "Niño de dos años con indicación de budesonida en aerosol presurizado para tratamiento preventivo. No logra sellar los labios alrededor de una boquilla. ¿Qué dispositivo permite administrar la dosis durante la respiración corriente?",
    "options": [
      "Inhalador de polvo seco conectado a aerocámara.",
      "Inhalador de dosis medida con aerocámara valvulada y máscara facial ajustada.",
      "Inhalador de dosis medida con espaciador y boquilla sin máscara.",
      "Inhalador de polvo seco solo."
    ]
  },
  {
    "originalId": "febrero-2023:23",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "Tras descartar urgencias orgánicas, se explica lo ocurrido, se contiene a la paciente y se acuerda seguimiento en atención primaria. Una primera crisis aislada no basta para diagnosticar trastorno de pánico.",
    "o": {
      "A": "Indicar alprazolam a demanda al alta expone a sedación y dependencia sin resolver el seguimiento.",
      "B": "La fluoxetina no aborta la crisis y no hay indicación automática de tratamiento preventivo tras un solo episodio.",
      "C": "La terapia cognitivo-conductual puede ser útil si se confirma un trastorno de pánico. Indicarla como única medida omite la intervención inmediata y la reevaluación."
    },
    "src": "NICE CG113 · Ataque de pánico en guardia, recomendación 1.3.6",
    "src_url": "https://www.nice.org.uk/guidance/cg113/resources/generalised-anxietydisorder-and-panic-disorder-in-adults-management-pdf-35109387756997",
    "stem": "Mujer de 26 años con primer episodio de miedo intenso, palpitaciones, hiperventilación y dolor torácico, con pico en diez minutos. La evaluación clínica dirigida descarta causas urgentes y consumo de sustancias. Los síntomas ceden, está estable y sin riesgo para sí misma. ¿Cuál es la conducta inicial más adecuada?",
    "options": [
      "Dar el alta con alprazolam a demanda como única indicación.",
      "Iniciar fluoxetina de forma sistemática.",
      "Indicar únicamente terapia cognitivo-conductual intensiva.",
      "Brindar contención e información, acordar control en atención primaria y explicar cuándo volver a la guardia."
    ]
  },
  {
    "originalId": "febrero-2023:24",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "La resección endoscópica en una pieza conserva la muestra para evaluar histología, invasión y margen. Con una cabeza de 25 mm se considera profilaxis del sangrado del pedículo.",
    "o": {
      "A": "La mera vigilancia demora el diagnóstico histológico y deja la lesión que pudo haber sangrado.",
      "B": "La ablación destruye tejido necesario para evaluar invasión y márgenes.",
      "C": "La colectomía se valora si hay criterios de invasión profunda, resección no curativa u otra indicación. No es el primer paso en este escenario."
    },
    "src": "ESGE · Colorectal polypectomy and endoscopic mucosal resection, actualización 2024, pólipos pediculados",
    "src_url": "https://www.thieme-connect.de/products/ejournals/pdf/10.1055/a-2304-3219.pdf",
    "stem": "Paciente estable de 72 años con episodio de proctorragia. La colonoscopía muestra un pólipo sigmoideo pediculado de 25 mm, técnicamente resecable en una pieza y sin signos endoscópicos de invasión profunda. ¿Qué conducta corresponde?"
  },
  {
    "originalId": "febrero-2023:25",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "En la fase aguda el ARN plasmático puede detectarse antes de que el inmunoensayo combinado se vuelva reactivo. La sospecha clínica en el embarazo justifica solicitar ARN de VIH ahora.",
    "o": {
      "A": "Esperar un año dejaría sin evaluar una infección con implicancias maternas y perinatales inmediatas.",
      "B": "Los CD4 informan sobre el estado inmunológico y no confirman una infección aguda.",
      "D": "Un resultado no reactivo durante el período de ventana no excluye primoinfección."
    },
    "src": "NIH · Pregnancy and Postpartum HIV Testing, sospecha de infección aguda",
    "src_url": "https://clinicalinfo.hiv.gov/en/guidelines/perinatal/maternal-hiv-testing-identification-exposure",
    "stem": "Gestante con exposición reciente y síndrome compatible con primoinfección por VIH. El inmunoensayo de antígeno y anticuerpos es no reactivo. ¿Qué prueba pedir ahora?",
    "options": [
      "Repetir únicamente serología al año",
      "CD4 aislados",
      "ARN del VIH",
      "Descartar VIH sin más estudios"
    ]
  },
  {
    "originalId": "febrero-2023:26",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "En una persona asintomática, una glucemia plasmática en ayunas de 138 mg/dL supera el umbral de 126 mg/dL y debe confirmarse. El algoritmo nacional indica repetir la glucemia en ayunas.",
    "o": {
      "A": "Es pertinente conversar sobre hábitos, pero una única medición en una paciente asintomática no confirma el diagnóstico.",
      "B": "La PTOG es especialmente útil ante glucemia alterada por debajo de 126 mg/dL. Para el valor de este caso, el algoritmo indica repetir la glucemia basal.",
      "C": "Comunicar un diagnóstico definitivo e iniciar metformina antes de confirmarlo adelanta la decisión terapéutica."
    },
    "src": "Ministerio de Salud de la Nación · GPC nacional de diabetes tipo 2, algoritmo diagnóstico",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/bancos/2021-01/guia-nacional-practica-clinica-diabetes-mellitius-tipo2_version-abreviada.pdf",
    "stem": "Mujer de 45 años, asintomática, sin diagnóstico previo de diabetes. En una muestra de plasma venoso tras ocho horas de ayuno tiene glucemia de 138 mg/dL. Según la guía nacional argentina de DM2, ¿qué estudio corresponde para confirmar el hallazgo?"
  },
  {
    "originalId": "febrero-2023:27",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "La cintura por encima del umbral poblacional, los triglicéridos de al menos 150 mg/dL y la glucemia en ayunas de al menos 100 mg/dL aportan tres componentes distintos. Los otros dos son presión elevada y HDL bajo.",
    "o": {
      "A": "El LDL alto y el tabaquismo aumentan el riesgo cardiovascular, pero no integran los cinco componentes.",
      "B": "La edad y el sedentarismo influyen en el riesgo, pero no son componentes diagnósticos de esta definición.",
      "D": "El colesterol total y el antecedente familiar no cuentan como dos componentes del síndrome."
    },
    "src": "American Heart Association · Statistical Update, síndrome metabólico, definición armonizada",
    "src_url": "https://www.heart.org/en/-/media/Files/Professional/Quality-Improvement/Get-With-the-Guidelines/Get-With-The-Guidelines-AFIB/AFib-Month/2024-AHA-Statistical-Update.pdf",
    "stem": "Según la definición armonizada de síndrome metabólico, ¿qué combinación reúne tres componentes diagnósticos distintos?",
    "options": [
      "LDL alto y tabaquismo",
      "Sedentarismo y edad avanzada",
      "Cintura elevada para la población, TG 220 mg/dL y glucemia en ayunas 118 mg/dL",
      "Colesterol total elevado y antecedente familiar"
    ]
  },
  {
    "originalId": "febrero-2023:28",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "El dolor unilateral agudo con reflejo cremastérico ausente hace sospechar torsión del cordón. Hay que convocar de inmediato al equipo quirúrgico para exploración y destorsión sin demoras.",
    "o": {
      "B": "La orina y el Doppler no deben retrasar la cirugía ante alta sospecha clínica.",
      "C": "Esperar doce horas con analgésicos compromete la posibilidad de preservar el testículo.",
      "D": "Condicionar la evaluación urológica al resultado ecográfico puede demorar la reperfusión."
    },
    "src": "EAU · Pocket Guidelines on Paediatric Urology 2026, escroto agudo",
    "src_url": "https://d56bochluxqnz.cloudfront.net/documents/pocket-guidelines/EAU-Pocket-on-Paediatric-Urology-2026.pdf"
  },
  {
    "originalId": "febrero-2023:29",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "Un mioma intramural sin síntomas clínicamente relevantes puede observarse. Se acuerda seguimiento y reevaluación si aparece sangrado importante, anemia, dolor o síntomas compresivos.",
    "o": {
      "A": "La histerectomía es definitiva y desproporcionada para un hallazgo que no afecta la calidad de vida.",
      "B": "La miomectomía no se indica solo por el diámetro informado en una paciente sin síntomas ni otra indicación.",
      "C": "Los análogos de GnRH tienen efectos adversos y su uso suele ser temporal, por ejemplo ante situaciones preoperatorias seleccionadas."
    },
    "src": "NIH · Uterine Fibroids, manejo según síntomas",
    "src_url": "https://health.nih.gov/health-topics-a-z/uterine-fibroids",
    "stem": "Mujer de 41 años con mioma intramural de 3,5 cm hallado por ecografía. Tiene ciclos habituales sin sangrado que afecte su vida diaria, hemoglobina normal y ausencia de dolor o compresión. Prefiere evitar intervenciones. ¿Cuál es la conducta más apropiada?"
  },
  {
    "originalId": "febrero-2023:30",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Elegir una fecha cercana y organizar cómo afrontar el primer día sin fumar son pasos concretos de preparación. Todavía no comenzó la abstinencia.",
    "o": {
      "B": "En contemplación la persona considera dejar de fumar, pero aún no concretó un plan inmediato.",
      "C": "En precontemplación no hay intención próxima de cambio.",
      "D": "La acción comienza cuando pone en práctica el cambio y deja de fumar."
    },
    "src": "Ministerio de Salud de la Nación · Guía de tratamiento de la adicción al tabaco, versión breve 2024, preparación del día D",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/gpc-tabaco-breve-08-2024.pdf",
    "stem": "Un paciente que aún fuma decide dejar el cigarrillo dentro de dos semanas, fija el cumpleaños de su hija como día D y organiza apoyo para esa fecha. Según el modelo de etapas del cambio, ¿en qué etapa está?"
  },
  {
    "originalId": "febrero-2023:31",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "La presentación de cara con mentón posterior persistente impide el mecanismo de desprendimiento por vía vaginal. Si no rota ni desciende con dinámica adecuada, corresponde cesárea.",
    "o": {
      "A": "El vacuum está contraindicado en la presentación de cara de un feto vivo.",
      "B": "Aumentar la dinámica no corrige el obstáculo mecánico de un mentón posterior persistente.",
      "C": "No corresponde esperar un descenso que no ocurre para intentar fórceps con la cabeza alta y el mentón posterior."
    },
    "src": "Médicos Sin Fronteras · Guía obstétrica, 7.9, presentación de cara",
    "src_url": "https://medicalguidelines.msf.org/en/viewport/ONC/english/7-9-face-presentation-51417589.html",
    "stem": "Gestante de término con dilatación completa y presentación de cara. En evaluaciones sucesivas persiste el mentón posterior, con cabeza alta y sin descenso pese a dinámica adecuada. Hay disponibilidad inmediata de quirófano. ¿Cuál es la vía de finalización indicada?"
  },
  {
    "originalId": "febrero-2023:32",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "La espirometría, la calidad de vida y la adherencia se registraron en una misma evaluación de cada participante. El período de reclutamiento y el muestreo sistemático no convierten la medición en longitudinal.",
    "o": {
      "A": "La selección aleatoria de participantes no equivale a asignar una intervención al azar.",
      "B": "Una cohorte requeriría seguir a los individuos para observar cambios o desenlaces posteriores.",
      "C": "La muestra proviene de una población definida y se miden variables de forma sistemática en un corte, más específico que una descripción de casos."
    },
    "src": "OMS · Epidemiología de la salud ocupacional, diseño transversal",
    "src_url": "https://iris.who.int/bitstream/handle/10665/70570/WHO_SDE_OEH_01.3_eng.pdf"
  },
  {
    "originalId": "febrero-2023:33",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "El dolor pleurítico que mejora al inclinarse hacia adelante, el roce y los cambios difusos del ST y del PR orientan a pericarditis aguda. La troponina ayuda a evaluar si hay compromiso miocárdico asociado.",
    "o": {
      "A": "Un infarto anteroseptal suele producir cambios regionales en precordiales, no el patrón difuso con roce descrito.",
      "B": "El dolor de pared no explica el roce pericárdico ni el descenso del PR.",
      "D": "La angina inestable no explica el patrón pleurítico-posicional con roce y cambios difusos."
    },
    "src": "ESC 2025 · Guidelines for the management of myocarditis and pericarditis, presentación pericárdica",
    "src_url": "https://academic.oup.com/eurheartj/article/46/40/3952/8234483",
    "stem": "Deportista de 34 años con cuatro días de dolor torácico que empeora con la inspiración y mejora al sentarse inclinado hacia adelante. Está estable. Se ausculta roce pericárdico. El ECG muestra supradesnivel difuso del ST y descenso del PR. ¿Cuál es el diagnóstico más probable?",
    "options": [
      "Infarto anteroseptal",
      "Dolor de pared con repolarización precoz del deportista",
      "Pericarditis aguda",
      "Angina inestable"
    ]
  },
  {
    "originalId": "febrero-2023:34",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "La hipotensión y el compromiso respiratorio con hipersonoridad y ausencia unilateral de murmullo vesicular indican neumotórax a tensión. Requiere descompresión inmediata por personal entrenado y drenaje pleural definitivo.",
    "o": {
      "A": "Un derrame produce matidez. Esperar una placa y dar diuréticos no resuelve el shock obstructivo.",
      "C": "El TEP puede causar disnea e hipotensión, pero no suele abolir el murmullo vesicular con hipersonoridad unilateral.",
      "D": "La neumonía suele producir fiebre y signos de condensación. Los antibióticos no alivian una tensión intrapleural."
    },
    "src": "NICE NG39 · Major trauma, manejo del neumotórax a tensión",
    "src_url": "https://www.nice.org.uk/guidance/ng39/resources/major-trauma-assessment-and-initial-management-pdf-1837400761285",
    "stem": "Tras un traumatismo torácico, un adulto presenta disnea intensa, TA 75/45 mmHg, ingurgitación yugular, hipersonoridad y ausencia de murmullo vesicular derechos. ¿Qué diagnóstico y conducta corresponden?",
    "options": [
      "Derrame pleural: esperar radiografía y administrar diuréticos.",
      "Neumotórax a tensión: descomprimir inmediatamente sin esperar imágenes y completar el drenaje pleural.",
      "TEP: anticoagular de inmediato.",
      "Neumonía: administrar antibióticos."
    ]
  },
  {
    "originalId": "febrero-2023:35",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "E1, V2 y M5 suman Glasgow 8. Deben asegurarse la vía aérea y la oxigenación, evitar hipotensión y coordinar evacuación neuroquirúrgica urgente. Tanto el espesor mayor de 10 mm como la desviación mayor de 5 mm son criterios quirúrgicos.",
    "o": {
      "A": "La sala general no permite el manejo inicial de este TEC grave y la observación demoraría la evacuación.",
      "B": "La dextrosa al 5 % no es el líquido de reanimación indicado para mantener perfusión cerebral. No sustituye la cirugía.",
      "D": "Reducir de forma brusca la presión con nitroprusiato puede comprometer la perfusión cerebral y no evacúa el hematoma."
    },
    "src": "Brain Trauma Foundation · Guidelines for the Surgical Management of TBI, hematoma subdural agudo",
    "src_url": "https://braintrauma.org/coma/guidelines/surgical",
    "stem": "Adulto con TEC. No abre los ojos, emite sonidos incomprensibles y localiza la presión. La TC muestra hematoma subdural agudo de 12 mm y desviación de la línea media de 7 mm. ¿Qué conducta inicial corresponde?",
    "options": [
      "Observar en sala general y repetir la TC al día siguiente.",
      "Expandir con dextrosa al 5 % y diferir la interconsulta neuroquirúrgica.",
      "Asegurar la vía aérea y perfusión, activar neurocirugía para evacuación urgente y coordinar cuidados intensivos.",
      "Normalizar de inmediato la TA con nitroprusiato como tratamiento principal."
    ]
  },
  {
    "originalId": "febrero-2023:36",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "La exposición a suelo contaminado, la eosinofilia, la hepatomegalia y el compromiso pulmonar en un preescolar orientan a larva migrans visceral por Toxocara. Los infiltrados migratorios solos no bastan para el diagnóstico.",
    "o": {
      "A": "La neumonía bacteriana puede dar condensación y fiebre, pero explica peor la eosinofilia marcada con compromiso hepático.",
      "B": "La tuberculosis puede tener evolución subaguda, pero la exposición y el patrón eosinofílico favorecen una helmintiasis tisular.",
      "D": "La aspergilosis invasiva es mucho más probable en huéspedes inmunocomprometidos y no explica el antecedente de geofagia."
    },
    "src": "CDC · Clinical Overview of Toxocariasis, enfermedad visceral",
    "src_url": "https://www.cdc.gov/toxocariasis/hcp/clinical-overview/index.html",
    "stem": "Niño de cuatro años con geofagia y exposición frecuente a tierra donde defecan cachorros. Presenta fiebre, tos, dolor abdominal, hepatomegalia, eosinofilia marcada e infiltrados pulmonares que cambian de localización. ¿Qué diagnóstico integra mejor estos datos?"
  },
  {
    "originalId": "febrero-2023:37",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "Se solicita IgA antitransglutaminasa tisular junto con IgA total mientras el paciente consume gluten. La IgA total permite reconocer un déficit que podría producir serología IgA falsamente negativa.",
    "o": {
      "A": "El antiendomisio IgA es muy específico y puede complementar el estudio, pero no es la primera determinación habitual.",
      "C": "Los ANA se usan en otras enfermedades autoinmunes y no son marcadores específicos de celiaquía.",
      "D": "Los anticuerpos antimitocondriales orientan a colangitis biliar primaria."
    },
    "src": "Guía de práctica clínica sobre enfermedad celíaca · Algoritmo de diagnóstico serológico, Argentina",
    "src_url": "https://www.assal.gov.ar/celiaquia/materiales/guia-practica-clinica-enfermedad-celiaca.pdf"
  },
  {
    "originalId": "febrero-2023:38",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "La fosfomicina trometamol oral de 3 g en dosis única es una opción para la mujer no embarazada. En el varón con aislamiento sensible, TMP-SMX 160/800 mg cada doce horas durante siete días es un esquema recomendado.",
    "o": {
      "A": "Una dosis única de nitrofurantoína no completa el tratamiento habitual de cistitis en ninguno de los dos casos.",
      "B": "La pauta de fosfomicina oral en dosis única no se extrapola automáticamente al varón.",
      "D": "Tres días de amoxicilina en el varón no constituyen el esquema recomendado y la sensibilidad no está documentada."
    },
    "src": "EAU 2026 · Pocket Guidelines on Urological Infections, tratamiento de la cistitis",
    "src_url": "https://d56bochluxqnz.cloudfront.net/documents/pocket-guidelines/EAU-Pocket-on-Urological-Infections-2026.pdf",
    "stem": "Dos adultos tienen cistitis localizada, sin fiebre, dolor lumbar ni signos de prostatitis. La mujer no está embarazada. En el varón, el urocultivo informa E. coli sensible a trimetoprima-sulfametoxazol. Ambos tienen función renal normal y no presentan alergias ni contraindicaciones. Según EAU, ¿qué combinación es apropiada?",
    "options": [
      "Una dosis única de nitrofurantoína para ambos.",
      "Fosfomicina trometamol en dosis única para ambos.",
      "Mujer: fosfomicina trometamol 3 g en dosis única. Varón: TMP-SMX 160/800 mg cada 12 horas por siete días.",
      "Mujer: cefalexina tres días. Varón: amoxicilina tres días."
    ]
  },
  {
    "originalId": "febrero-2023:39",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "La furosemida puede provocar pérdidas renales de potasio. La hipopotasemia aumenta la susceptibilidad a los efectos tóxicos de la digoxina, lo que concuerda con náuseas y bradiarritmia.",
    "o": {
      "A": "La hipernatremia aislada no es el trastorno que explica esta susceptibilidad.",
      "C": "La hiperventilación voluntaria no explica el vínculo farmacológico entre el diurético, el potasio bajo y la digoxina.",
      "D": "La hipoglucemia puede causar síntomas autonómicos, pero no es el factor predisponente demostrado en el caso."
    },
    "src": "FDA · Digoxina, ficha de prescripción, toxicidad digitálica",
    "src_url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/021648s015lbl.pdf",
    "stem": "Paciente tratada con digoxina y furosemida con náuseas, bradiarritmia y potasio de 2,7 mmol/L. ¿Qué alteración favorece la toxicidad digitálica?",
    "options": [
      "Hipernatremia aislada",
      "Hipopotasemia por el diurético de asa",
      "Hiperventilación voluntaria",
      "Hipoglucemia"
    ]
  },
  {
    "originalId": "febrero-2023:40",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "A los cinco años corresponde viajar en el asiento trasero con un sistema de retención infantil homologado, instalado correctamente y elegido según peso y talla.",
    "o": {
      "A": "El cinturón de adulto por sí solo no garantiza un ajuste adecuado y no corresponde ubicarlo adelante.",
      "B": "Los brazos de un adulto no pueden retenerlo de forma segura durante una colisión.",
      "D": "Viajar de pie deja al niño sin sujeción y aumenta el riesgo de lesiones."
    },
    "src": "Agencia Nacional de Seguridad Vial · Seguridad vial infantil, sistemas de retención",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/6-seguridad-vial-infantil.pdf",
    "stem": "Según la orientación nacional argentina, ¿cómo debe viajar en automóvil particular un niño de cinco años?",
    "options": [
      "Delante con cinturón de adulto",
      "En brazos de un adulto",
      "Atrás con sistema de retención adecuado a su tamaño",
      "De pie detrás del conductor"
    ]
  },
  {
    "originalId": "febrero-2023:41",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Los permisos de salida son facultad del equipo de salud. Cuando corresponde informar al juez, se trata de una comunicación y no de pedir autorización previa. La ley contempla una excepción para internaciones del artículo 34 del Código Penal.",
    "o": {
      "B": "Exigir autorización judicial previa para cada salida no es la regla del artículo 23.",
      "C": "El juez no reemplaza al equipo tratante en esta decisión clínica ordinaria.",
      "D": "La decisión no se reserva al psiquiatra individual ni requiere el permiso judicial propuesto."
    },
    "src": "Ley nacional 26.657 · Artículo 23, alta, externación y permisos de salida",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/s2d1.libro_.ley_26.657_salud_mentalweb.pdf",
    "stem": "En una internación regida por la Ley Nacional de Salud Mental, ajena al artículo 34 del Código Penal, ¿quién decide un permiso de salida según el artículo 23?"
  },
  {
    "originalId": "febrero-2023:42",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "En una cirugía electiva, la información y la decisión libre del paciente deben quedar documentadas mediante consentimiento informado escrito y firmado. La aceptación verbal durante la consulta no completa la instrumentación exigida.",
    "o": {
      "A": "Una persona adulta capaz no necesita autorización judicial para consentir esta cirugía.",
      "C": "La firma de un familiar no sustituye la del paciente capaz.",
      "D": "El carácter programado de la intervención no la exime del consentimiento escrito."
    },
    "src": "Ley nacional 26.529 · Artículos 5 a 7, consentimiento informado e instrumentación",
    "src_url": "https://www.argentina.gob.ar/normativa/nacional/ley-26529-160432/texto",
    "stem": "Adulto capaz de 55 años acepta verbalmente una cirugía electiva de hernia luego de recibir información sobre riesgos, beneficios y alternativas. ¿Qué paso falta antes de la intervención?",
    "options": [
      "Solicitar autorización judicial.",
      "Documentar el consentimiento informado por escrito con la firma del paciente.",
      "Reemplazar el consentimiento del paciente por la firma de un familiar.",
      "Operar sin otra constancia por tratarse de cirugía programada."
    ]
  },
  {
    "originalId": "febrero-2023:43",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "El sangrado activo y las 35.000 plaquetas/µL en un síndrome HELLP implican alto riesgo hemorrágico. Se evita la punción y se coordina con anestesia y obstetricia la alternativa más segura y la evaluación de la coagulopatía.",
    "o": {
      "A": "La epidural puede originar un hematoma en un espacio cerrado. El recuento y el sangrado impiden proceder sin evaluación.",
      "C": "La vía raquídea también implica una punción neuroaxial y no elimina el riesgo hemorrágico.",
      "D": "La aspirina inhibe la función plaquetaria y no corrige el recuento."
    },
    "src": "SOAP · Consenso interdisciplinario sobre procedimientos neuroaxiales en obstetricia con trombocitopenia",
    "src_url": "https://www.soap.org/assets/docs/SOAP_Thrombocytopenia_Consensus_Statement_FINAL_STATEMENT.pdf",
    "stem": "Gestante con HELLP, sangrado clínico y 35.000 plaquetas/µL. ¿Qué conducta corresponde ante una solicitud de analgesia neuroaxial?",
    "options": [
      "Realizar epidural sin más evaluación",
      "Evitar la punción por el riesgo hemorrágico y coordinar alternativa con anestesia",
      "Realizar raquídea sin evaluar hemostasia",
      "Administrar aspirina para elevar las plaquetas"
    ]
  },
  {
    "originalId": "febrero-2023:44",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "La llegada de la leche suele acompañarse de aumento bilateral y difuso del volumen mamario entre los días tres y cinco. La tensión simétrica, sin eritema focal ni deterioro general, orienta a ingurgitación.",
    "o": {
      "A": "En la endometritis se esperan fiebre, dolor uterino o loquios anormales. No explica la tensión mamaria bilateral aislada.",
      "B": "La mastitis suele producir dolor e inflamación localizados y puede acompañarse de fiebre y malestar general.",
      "D": "Una infección de la episiorrafia daría dolor, eritema o secreción en la herida perineal."
    },
    "src": "ACOG · Breastfeeding Challenges, ingurgitación mamaria posparto",
    "src_url": "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2021/02/breastfeeding-challenges",
    "stem": "Al cuarto día posparto, la paciente nota ambas mamas tensas y doloridas coincidiendo con la bajada de la leche. Tiene temperatura de 37,6 °C, buen estado general, sin eritema focal, dolor uterino ni signos de infección perineal. ¿Qué causa explica mejor el cuadro?"
  },
  {
    "originalId": "febrero-2023:45",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "El liquen plano oral reticular produce estrías blancas entrecruzadas en la mucosa yugal. Puede ser asintomático y persiste al raspado. La morfología tiene más valor diagnóstico que el antecedente de hepatitis C aislado.",
    "o": {
      "A": "Una leucoplasia también puede persistir al raspado, pero suele verse como una placa sin la trama reticular fina.",
      "B": "La fricción por mordedura produce una superficie irregular o desflecada sobre la línea de oclusión.",
      "C": "El muguet seudomembranoso suele desprenderse al raspar y dejar una base eritematosa."
    },
    "src": "DermNet · Oral lichen planus, presentación reticular",
    "src_url": "https://dermnetnz.org/topics/oral-lichen-planus"
  },
  {
    "originalId": "febrero-2023:46",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "Si estaba elevado al diagnóstico de un adenocarcinoma pancreático, el CA 19-9 puede seguirse junto con la clínica y las imágenes para evaluar respuesta. La colestasis también puede elevarlo, por lo que un resultado aislado no diagnostica cáncer.",
    "o": {
      "A": "La alfafetoproteína se usa especialmente en hepatocarcinoma y algunos tumores germinales.",
      "B": "El CA 125 se utiliza sobre todo para el seguimiento del cáncer epitelial de ovario.",
      "C": "El CA 15-3 tiene aplicaciones en el seguimiento de algunos cánceres de mama."
    },
    "src": "Instituto Nacional del Cáncer de EE. UU. · Pruebas de marcadores tumorales más comunes, CA 19-9",
    "src_url": "https://www.cancer.gov/espanol/cancer/diagnostico-estadificacion/diagnostico/lista-marcadores-tumorales",
    "stem": "En un paciente con adenocarcinoma de páncreas confirmado, ¿qué marcador sérico puede contribuir al seguimiento si estaba elevado antes del tratamiento?"
  },
  {
    "originalId": "febrero-2023:47",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "Un adulto con traumatismo cervical cerrado y dolor en la línea media requiere imágenes. Para detectar una lesión ósea cervical, el estudio inicial indicado es la TC cervical sin contraste.",
    "o": {
      "A": "Las radiografías de tórax y abdomen no evalúan las vértebras cervicales.",
      "C": "Una TC de cráneo aislada no estudia adecuadamente toda la columna cervical.",
      "D": "Una única proyección cervical lateral puede pasar por alto fracturas, especialmente en las zonas de transición."
    },
    "src": "ACR Appropriateness Criteria · Acute Spinal Trauma, variante 2, revisión 2024",
    "src_url": "https://acsearch.acr.org/docs/69359/Narrative/",
    "stem": "Varón de 35 años, hemodinámicamente estable tras un choque de alta energía, con dolor a la palpación en la línea media cervical. Se mantiene protección cervical y hay tomografía disponible. ¿Qué estudio inicial evalúa mejor una lesión ósea cervical?",
    "options": [
      "Radiografías de tórax y abdomen.",
      "TC de columna cervical sin contraste.",
      "TC de cráneo como único estudio.",
      "Radiografía lateral de columna cervical como único estudio."
    ]
  },
  {
    "originalId": "febrero-2023:48",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "Los vómitos posprandiales progresivos a las seis semanas, la masa epigástrica en oliva y la alcalosis por pérdida de ácido gástrico orientan a estenosis hipertrófica de píloro. La ecografía permite confirmarla.",
    "o": {
      "A": "Una crisis suprarrenal por pérdida de sal suele producir deshidratación con hiponatremia, hiperpotasemia y acidosis, sin oliva palpable.",
      "C": "La atresia duodenal suele manifestarse desde las primeras tomas y con frecuencia produce vómitos biliosos.",
      "D": "Una membrana antral puede obstruir la salida gástrica, pero no produce la oliva muscular palpable característica."
    },
    "src": "Royal Children’s Hospital Melbourne · Pyloric stenosis, presentación y evaluación",
    "src_url": "https://www.rch.org.au/clinicalguide/guideline_index/Pyloric_Stenosis/"
  },
  {
    "originalId": "febrero-2023:49",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "El dolor que aumenta al retirar la mano después de la palpación sugiere irritación peritoneal. En este contexto obliga a valorar con urgencia causas abdominales y ginecológicas, sin identificar por sí solo la etiología.",
    "o": {
      "A": "La disminución de los ruidos hidroaéreos puede observarse en íleo y es inespecífica.",
      "B": "La puñopercusión lumbar dolorosa orienta más a enfermedad renal o urinaria.",
      "C": "El signo de Cullen es una equimosis periumbilical. Es distinto de las venas colaterales de la cabeza de Medusa y del dolor a la descompresión."
    },
    "src": "Manual MSD profesional · Acute Abdominal Pain, exploración abdominal",
    "src_url": "https://www.msdmanuals.com/professional/gastrointestinal-disorders/acute-abdomen-and-surgical-gastroenterology/acute-abdominal-pain",
    "stem": "Mujer de 30 años con dolor súbito en abdomen inferior, fiebre y vómitos. ¿Qué hallazgo orienta más directamente a irritación peritoneal?",
    "options": [
      "Disminución de los ruidos hidroaéreos.",
      "Puñopercusión lumbar positiva.",
      "Equimosis periumbilical (signo de Cullen).",
      "Dolor a la descompresión (signo de Blumberg)."
    ]
  },
  {
    "originalId": "febrero-2023:50",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "El dolor orbitario unilateral intenso de 30 a 60 minutos con lagrimeo y congestión nasal del mismo lado es típico de cefalea en racimos. El alcohol puede precipitar ataques durante un período activo.",
    "o": {
      "A": "La neuralgia trigeminal suele dar descargas de segundos a pocos minutos desencadenadas por estímulos en la cara.",
      "C": "Sin tratamiento, la migraña suele durar horas a días. La duración breve y los signos autonómicos ipsilaterales favorecen cefalea en racimos.",
      "D": "La neuralgia glosofaríngea provoca descargas en faringe, base de la lengua u oído, a menudo al tragar."
    },
    "src": "International Headache Society · ICHD-3, 3.1 Cluster headache",
    "src_url": "https://ichd-3.org/3-trigeminal-autonomic-cephalalgias/3-1-cluster-headache/"
  },
  {
    "originalId": "febrero-2023:51",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "En el control prenatal habitual, la ventana ideal para la PTOG es de 24 a 28 semanas. El protocolo argentino utiliza 75 g de glucosa y mide glucemia en ayunas y a las dos horas.",
    "o": {
      "B": "Las semanas 20 a 24 no constituyen la ventana habitual completa. El estudio temprano se decide según el contexto.",
      "C": "La prueba de 100 g corresponde a otro esquema diagnóstico y no es la carga recomendada por el protocolo argentino."
    },
    "src": "Ministerio de Salud de la Nación · Protocolo nacional de diagnóstico de diabetes gestacional, 2023",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/bancos/2023-08/Protocolo_de_Diabetes_Gestacional_2023.pdf"
  },
  {
    "originalId": "febrero-2023:52",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "El pródromo febril con mialgias y síntomas digestivos seguido de hipoxemia e infiltrados bilaterales rápidamente progresivos, trombocitopenia y leucocitosis orienta a síndrome cardiopulmonar por hantavirus. La residencia y el trabajo rural aportan contexto epidemiológico.",
    "o": {
      "A": "La influenza puede causar distrés, pero la transición rápida a compromiso cardiopulmonar con plaquetopenia marcada y exposición rural favorece hantavirosis.",
      "B": "La leptospirosis puede comprometer pulmón y riñón. Aquí no se describen ictericia ni lesión renal temprana y predomina el patrón cardiopulmonar.",
      "D": "El dengue grave puede producir fuga capilar y plaquetopenia, pero la marcada leucocitosis y la evolución pulmonar tras el pródromo son más sugestivas de hantavirosis."
    },
    "src": "Ministerio de Salud de la Nación · Hantavirosis o infección por hantavirus, síndrome cardiopulmonar",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/hantavirosis_o_infeccion_por_hantavirus_2024.pdf"
  },
  {
    "originalId": "febrero-2023:53",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "La estimulación simpática puede producir agitación, taquicardia, hipertensión, midriasis e hipertermia. La hipertermia por estimulantes es una urgencia y se distingue del síndrome de hipertermia maligna asociado a determinados anestésicos.",
    "o": {
      "A": "La somnolencia aislada no es la manifestación típica de la fase estimulante aguda.",
      "B": "La depresión respiratoria con disminución de conciencia orienta especialmente a opioides u otros depresores.",
      "C": "La miosis no es el signo pupilar habitual del síndrome simpaticomimético."
    },
    "src": "Ministerio de Salud y Protección Social de Colombia · Guías para el manejo de emergencias toxicológicas, cocaína",
    "src_url": "https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/GT/guias-manejo-emergencias-toxicologicas-outpout.pdf",
    "stem": "Durante la fase estimulante de una intoxicación aguda por cocaína, ¿qué conjunto de hallazgos es más característico?",
    "options": [
      "Somnolencia aislada.",
      "Bradipnea y depresión del sensorio.",
      "Miosis e inyección conjuntival como únicos hallazgos.",
      "Agitación, taquicardia, midriasis e hipertermia."
    ]
  },
  {
    "originalId": "febrero-2023:54",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "Las calcificaciones vasculares típicas y un ganglio intramamario con hilio graso conservado son hallazgos benignos. La evaluación global es BI-RADS 2 y corresponde el control habitual según edad y riesgo.",
    "o": {
      "A": "BI-RADS 0 indica que hacen falta estudios adicionales o comparaciones para completar la evaluación.",
      "B": "BI-RADS 1 se usa para una evaluación negativa sin hallazgos descriptos.",
      "D": "BI-RADS 3 indica un hallazgo probablemente benigno con control a corto plazo. No corresponde para un ganglio de morfología inequívocamente benigna."
    },
    "src": "American College of Radiology · BI-RADS, mamografía, evaluación final de hallazgos benignos",
    "src_url": "https://cs.acr.org/-/media/ACR/Files/RADS/BI-RADS/Mammography-Reporting.pdf",
    "stem": "Mamografía completa en una mujer de 43 años con calcificaciones vasculares típicas y un nódulo oval circunscripto, con hilio graso, identificado como ganglio intramamario normal. Sin otros hallazgos. ¿Qué categoría de evaluación corresponde?",
    "options": [
      "BI-RADS 0",
      "BI-RADS 1",
      "BI-RADS 2",
      "BI-RADS 3"
    ]
  },
  {
    "originalId": "febrero-2023:55",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "La dermatitis herpetiforme es la manifestación cutánea característica de la enfermedad celíaca. Suele causar intenso prurito y lesiones agrupadas, simétricas, sobre superficies extensoras.",
    "o": {
      "A": "La dermatitis atópica puede producir prurito, pero su asociación típica es con la atopia.",
      "C": "El granuloma anular produce pápulas en anillo y no es la manifestación cutánea específica de enteropatía por gluten.",
      "D": "La rosácea afecta predominantemente el centro de la cara y no explica esta asociación característica."
    },
    "src": "Sociedad Argentina de Dermatología · Consenso de diagnóstico y tratamiento de dermatitis herpetiforme",
    "src_url": "https://sad.org.ar/wp-content/uploads/2024/12/SAD-Consenso-de-Diagnostico-y-Tratamiento-de-Dermatitis-Herpetiforme-GF.pdf"
  },
  {
    "originalId": "febrero-2023:56",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "A los 57 años corresponden las pesquisas de mama, cuello uterino y colon en una mujer de riesgo habitual con tamizajes vencidos. Se ofrece mamografía, prueba de VPH o PAP según el programa y pesquisa colorrectal, por ejemplo con test inmunoquímico de materia fecal.",
    "o": {
      "A": "Una ergometría en una mujer asintomática de bajo riesgo no sustituye la mamografía.",
      "C": "La ecografía tiroidea no es una pesquisa poblacional de rutina y omite el tamizaje colorrectal indicado.",
      "D": "No se indica colposcopía como rastreo primario ni radiografía de tórax para detección de cáncer pulmonar en una persona que nunca fumó."
    },
    "src": "Ministerio de Salud de la Nación · Manual para el cuidado de personas con enfermedades crónicas no transmisibles, prácticas preventivas y tamizaje oncológico",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/manualcuidadoent4_-1-.pdf",
    "stem": "Mujer de 57 años con cuello uterino, asintomática, sin antecedentes familiares relevantes y sin pesquisas de cáncer desde hace más de diez años. Nunca fumó. En el control de salud, ¿qué conjunto de tamizajes oncológicos corresponde ofrecerle en la Argentina?",
    "options": [
      "Tamizaje cervical, colorrectal y ergometría en reemplazo de la mamografía.",
      "Tamizaje cervical, mamografía y tamizaje colorrectal.",
      "Tamizaje cervical, mamografía y ecografía tiroidea de rutina en lugar del tamizaje colorrectal.",
      "Colposcopía primaria, tamizaje colorrectal y radiografía de tórax."
    ]
  },
  {
    "originalId": "febrero-2023:57",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "Una glucemia plasmática en ayunas de 138 mg/dL supera el umbral de 126 mg/dL. En ausencia de síntomas inequívocos se necesita confirmación. La guía nacional indica repetir la glucemia plasmática en ayunas.",
    "o": {
      "A": "Los hábitos saludables son pertinentes, pero la primera determinación aislada no confirma el diagnóstico.",
      "B": "La PTOG es particularmente útil con glucemia basal alterada por debajo del umbral de diabetes. No es el siguiente paso preferido en este algoritmo.",
      "C": "Iniciar metformina como tratamiento de una diabetes ya confirmada se adelanta a la segunda determinación."
    },
    "src": "Ministerio de Salud de la Nación · GPC nacional de diabetes tipo 2, algoritmo diagnóstico",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/bancos/2021-01/guia-nacional-practica-clinica-diabetes-mellitius-tipo2_version-abreviada.pdf",
    "stem": "Paciente de 45 años con obesidad, sin síntomas de hiperglucemia. Primera glucemia plasmática venosa de 138 mg/dL luego de ocho horas de ayuno. Según el algoritmo nacional argentino de DM2, ¿qué conducta diagnóstica corresponde?"
  },
  {
    "originalId": "febrero-2023:58",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Los cuatro pilares son un inhibidor del sistema renina-angiotensina, preferentemente ARNI cuando está indicado y se tolera, un betabloqueante de eficacia probada, un antagonista mineralocorticoide y un inhibidor SGLT2. Reducen el riesgo de eventos y deben ajustarse a la tolerancia clínica.",
    "o": {
      "B": "Un nitrato aislado no reemplaza al antagonista mineralocorticoide ni al inhibidor SGLT2.",
      "C": "La combinación de IECA y ARA II aumenta el riesgo de hiperpotasemia y deterioro renal y no forma parte del esquema básico.",
      "D": "La prazosina no sustituye al betabloqueante ni al inhibidor SGLT2 en el tratamiento que modifica el pronóstico."
    },
    "src": "ACC · Consenso 2024 sobre tratamiento de la insuficiencia cardíaca con fracción de eyección reducida",
    "src_url": "https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2024/03/06/19/22/2024-acc-expert-consensus-hfref",
    "stem": "Adulto estable con insuficiencia cardíaca sintomática y FEVI 30 %, función renal y potasio adecuados, sin contraindicaciones. ¿Qué combinación representa las cuatro clases fundamentales que modifican el pronóstico?",
    "options": [
      "Sacubitrilo/valsartán, carvedilol, espironolactona y dapagliflozina.",
      "Enalapril, carvedilol y mononitrato de isosorbida.",
      "Enalapril, losartán y carvedilol.",
      "Enalapril, prazosina y espironolactona."
    ]
  },
  {
    "originalId": "febrero-2023:59",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "En una mujer de 30 años con infección confirmada, sin embarazo ni contraindicaciones, corresponde ofrecer tratamiento etiológico. El esquema habitual de benznidazol dura 60 días y requiere seguimiento de tolerancia, controles de laboratorio y evitar el embarazo durante el tratamiento.",
    "o": {
      "A": "La vigilancia cardiológica es parte del seguimiento, pero no sustituye la oportunidad de tratamiento etiológico.",
      "B": "Una ergometría no es requisito para decidir el tratamiento en esta paciente sin síntomas ni alteraciones en el ECG o el ecocardiograma.",
      "C": "La interconsulta puede apoyar el manejo, pero limitar la conducta al seguimiento omite ofrecer tratamiento."
    },
    "src": "Ministerio de Salud de la Nación · Chagas, guía breve para equipos de salud, esquema de tratamiento",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/boceto_guia_de_bolsillo_chagas-91225.pdf"
  },
  {
    "originalId": "febrero-2023:60",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "La tumefacción preauricular dolorosa que desplaza el lóbulo de la oreja y el compromiso del conducto de Stenon localizan la inflamación en la parótida. La vacunación completa reduce el riesgo de paperas, pero no las excluye. La exploración identifica parotiditis, no confirma por sí sola su etiología.",
    "o": {
      "A": "Un mucocele suele ser una lesión localizada de la mucosa oral y no produce esta tumefacción glandular febril.",
      "B": "La sialolitiasis suele causar dolor y aumento de volumen relacionados con las comidas, con mayor frecuencia en la glándula submandibular.",
      "D": "La adenitis submaxilar se palpa por debajo de la mandíbula y no explica el desplazamiento del lóbulo ni los cambios en el orificio de Stenon."
    },
    "src": "CDC · Clinical Features of Mumps, parotitis y presentación en vacunados",
    "src_url": "https://www.cdc.gov/mumps/hcp/clinical-signs/index.html"
  },
  {
    "originalId": "febrero-2023:61",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "La diarrea crónica con deposiciones voluminosas, distensión, palidez y falla de crecimiento orienta a malabsorción por enfermedad celíaca tras la incorporación del gluten. Es una sospecha que requiere evaluación diagnóstica mientras la niña sigue consumiendo gluten.",
    "o": {
      "A": "En la diarrea crónica inespecífica del niño pequeño suele conservarse el crecimiento y el estado nutricional.",
      "B": "La alergia a proteínas de leche puede dar síntomas digestivos, pero la combinación de malabsorción, palidez y retraso ponderal favorece celiaquía entre las opciones.",
      "D": "La intolerancia a la lactosa suele causar distensión, gases y diarrea osmótica relacionados con lácteos y explica peor la palidez y el compromiso nutricional prolongado."
    },
    "src": "Ministerio de Salud de la Nación · Guía de práctica clínica sobre enfermedad celíaca, manifestaciones pediátricas",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/bancos/2018-10/0000000634cnt-guia_enfermedad_celiaca_2016_web.pdf"
  },
  {
    "originalId": "febrero-2023:62",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "El perro sano y localizable debe observarse por un profesional veterinario durante diez días contados desde la agresión. La conducta con la persona expuesta se evalúa desde el inicio según la herida, la especie y la situación epidemiológica.",
    "o": {
      "A": "Un día no completa el intervalo de observación indicado para el perro.",
      "B": "Dos días siguen siendo insuficientes para cerrar el control veterinario.",
      "C": "Tres días tampoco alcanzan el plazo establecido por la guía argentina."
    },
    "src": "Ministerio de Salud de la Nación · Guía para la prevención, vigilancia y control de la rabia, observación clínica veterinaria",
    "src_url": "https://www.argentina.gob.ar/normativa/311546_RES1144_pdf/archivo",
    "stem": "Según la guía argentina de rabia, tras la mordedura de un perro sano disponible para control veterinario, ¿cuánto dura la observación del animal?",
    "options": [
      "24 horas",
      "48 horas",
      "Tres días",
      "Diez días"
    ]
  },
  {
    "originalId": "febrero-2023:63",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "Los vómitos no biliosos cada vez más intensos después de las tomas, con hambre posterior y alcalosis por pérdida de ácido gástrico, orientan a estenosis hipertrófica del píloro. La buena ganancia de peso previa no excluye una presentación temprana.",
    "o": {
      "A": "La atresia duodenal suele manifestarse desde las primeras tomas, a menudo con vómito bilioso.",
      "B": "El reflujo fisiológico suele causar regurgitación sin esfuerzo. La progresión a vómitos en proyectil obliga a descartar obstrucción.",
      "C": "Una crisis suprarrenal suele acompañarse de deshidratación y alteraciones electrolíticas, típicamente con acidosis en la forma perdedora de sal."
    },
    "src": "Royal Children’s Hospital · Pyloric stenosis, presentación clínica",
    "src_url": "https://www.rch.org.au/clinicalguide/guideline_index/Pyloric_stenosis/"
  },
  {
    "originalId": "febrero-2023:64",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "La hipertensión grave persistente requiere tratamiento urgente y el sulfato de magnesio previene convulsiones. A las 35 semanas, con compromiso renal y hepático, corresponde finalizar el embarazo después de estabilizar a la madre. La vía depende de la situación obstétrica y fetal.",
    "o": {
      "A": "Esperar la maduración pulmonar demoraría una finalización indicada y dejaría sin tratar la hipertensión grave.",
      "C": "Un Bishop bajo puede dificultar la inducción, pero por sí solo no obliga a realizar cesárea.",
      "D": "La observación y el control de presión sin un plan de finalización son insuficientes ante este compromiso materno."
    },
    "src": "ACOG · Preeclampsia and High Blood Pressure During Pregnancy, manejo de las formas graves",
    "src_url": "https://www.acog.org/womens-health/faqs/preeclampsia-and-high-blood-pressure-during-pregnancy",
    "stem": "Primigesta de 35 semanas con cefalea, TA 165/110 mmHg persistente al repetirla, proteinuria, creatinina de 1,9 mg/dL y transaminasas elevadas. Feto cefálico con monitoreo tranquilizador. Bishop 3. ¿Cuál es la estrategia inicial más adecuada?",
    "options": [
      "Administrar magnesio y demorar la finalización hasta completar corticoides.",
      "Tratar de inmediato la hipertensión grave, dar sulfato de magnesio y finalizar tras estabilizar, eligiendo la vía según las condiciones obstétricas.",
      "Indicar cesárea obligatoria exclusivamente por el Bishop bajo.",
      "Mantener conducta expectante hasta las 37 semanas si baja la TA."
    ]
  },
  {
    "originalId": "febrero-2023:65",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "El dolor intenso con sangrado, hipertonía uterina y compromiso fetal grave es característico de desprendimiento prematuro de placenta normoinserta. Parte de la pérdida de sangre puede quedar oculta.",
    "o": {
      "A": "La placenta previa suele producir sangrado indoloro con útero relajado.",
      "B": "La rotura de vasa previa puede causar sangrado fetal tras la rotura de membranas, pero no explica típicamente el útero doloroso e hipertónico.",
      "C": "El embarazo ectópico habitual se manifiesta al comienzo de la gestación y no explica este cuadro intraparto a término."
    },
    "src": "Manual MSD profesional · Desprendimiento placentario, signos y síntomas",
    "src_url": "https://www.msdmanuals.com/es/professional/ginecolog%C3%ADa-y-obstetricia/complicaciones-prenatales/desprendimiento-placentario"
  },
  {
    "originalId": "febrero-2023:66",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "En un recién nacido vigoroso, diferir el pinzamiento al menos un minuto permite la transfusión placentaria y mejora las reservas de hierro durante los primeros meses. Esto no elimina la necesidad de evaluar la prevención de ferropenia según edad y riesgo.",
    "o": {
      "A": "No se recomienda el pinzamiento sistemático antes del minuto con el objetivo de prevenir policitemia.",
      "C": "El momento del pinzamiento sí influye en el volumen de sangre transferido y el hierro disponible.",
      "D": "El beneficio sobre las reservas de hierro no garantiza que ningún lactante necesite hierro durante todo el primer año."
    },
    "src": "OMS · Optimal timing of cord clamping for the prevention of iron deficiency anaemia in infants",
    "src_url": "https://www.who.int/tools/elena/interventions/cord-clamping",
    "stem": "Recién nacido de término vigoroso, sin indicación de separar de inmediato a la madre y al bebé. ¿Qué afirmación sobre el pinzamiento del cordón es correcta?",
    "options": [
      "Debe pinzarse antes del minuto para prevenir policitemia en todos los recién nacidos.",
      "Diferirlo al menos un minuto favorece los depósitos de hierro durante los primeros meses.",
      "El momento del pinzamiento no modifica el aporte de hierro al recién nacido.",
      "Diferirlo evita toda necesidad de hierro durante el primer año."
    ]
  },
  {
    "originalId": "febrero-2023:67",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "La fiebre, la tos, la taquipnea y el hallazgo unilateral orientan a neumonía basal con posible irritación diafragmática o derrame. Ante dificultad respiratoria que requiere atención hospitalaria, la radiografía de tórax permite evaluar consolidación y complicaciones.",
    "o": {
      "A": "La TC no es la imagen inicial habitual para una neumonía con posible derrame.",
      "B": "Las pruebas hepáticas y renales pueden ser útiles según la evolución, pero no localizan la causa pulmonar.",
      "C": "Los reactantes inflamatorios no muestran consolidación ni identifican un derrame."
    },
    "src": "PIDS/IDSA · Neumonía adquirida en la comunidad en pediatría, indicaciones de radiografía de tórax",
    "src_url": "https://academic.oup.com/cid/article/53/7/e25/424286",
    "stem": "Niño de seis años con fiebre, tos, dolor en hipocondrio derecho, FR 50/min y tiraje. Tiene murmullo vesicular disminuido en la base derecha y requiere evaluación hospitalaria. No hay signos peritoneales. Una vez iniciada la estabilización, ¿qué estudio inicial permite evaluar el foco sospechado?"
  },
  {
    "originalId": "febrero-2023:68",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "El pródromo febril seguido de dificultad respiratoria con hemoconcentración, trombocitopenia, leucocitosis y linfocitos reactivos orienta a síndrome cardiopulmonar por hantavirus. La exposición rural aumenta la sospecha y la progresión exige evaluación urgente.",
    "o": {
      "B": "En la intoxicación por organofosforados predomina un síndrome colinérgico, con secreciones, miosis o fasciculaciones.",
      "C": "La brucelosis puede causar fiebre y mialgias tras exposición rural, pero explica peor la combinación hematológica y el deterioro respiratorio rápido."
    },
    "src": "Ministerio de Salud de la Nación · Hantavirosis, diagnóstico del síndrome cardiopulmonar",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/hantavirosis_o_infeccion_por_hantavirus_2024.pdf",
    "stem": "Niño de 11 años de una zona rural de Entre Ríos con fiebre, escalofríos y mialgias. En las últimas horas desarrolla dificultad respiratoria. Presenta hemoconcentración, trombocitopenia, leucocitosis y linfocitos atípicos. Entre las opciones disponibles, ¿qué diagnóstico es más probable?"
  },
  {
    "originalId": "febrero-2023:69",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Al confirmarse el embarazo se debe suspender el IECA y ofrecer un antihipertensivo compatible, como labetalol, nifedipina o metildopa según el caso. Corresponde controlar la presión y revisar la exposición con obstetricia.",
    "o": {
      "B": "Que la presión esté controlada no justifica continuar un fármaco con riesgo fetal.",
      "C": "Agregar metildopa sin retirar el IECA mantiene la exposición que debe evitarse.",
      "D": "Aumentar la dosis no previene la preeclampsia y aumenta una exposición inapropiada."
    },
    "src": "NICE NG133 · Hipertensión crónica en el embarazo, medicación antenatal",
    "src_url": "https://www.nice.org.uk/guidance/ng133/resources/chronic-hypertension-antenatal-care-pdf-8720711393"
  },
  {
    "originalId": "febrero-2023:70",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "La morfología fina pleomórfica y la distribución agrupada nueva son sospechosas. Ante una evaluación BI-RADS 4 corresponde obtener tejido, habitualmente mediante biopsia percutánea guiada por imágenes. El número de calcificaciones por sí solo no define la indicación.",
    "o": {
      "A": "Las calcificaciones gruesas típicas en palomitas de maíz corresponden a un patrón benigno.",
      "B": "Las calcificaciones redondas dispersas y estables sin otros signos sospechosos no justifican biopsia por sí solas.",
      "D": "Las calcificaciones que delinean los vasos con aspecto típico son benignas."
    },
    "src": "ACR · BI-RADS, léxico mamográfico de calcificaciones y categorías de evaluación",
    "src_url": "https://cs.acr.org/-/media/ACR/Files/RADS/BI-RADS/BIRADS-Poster.pdf",
    "stem": "Una mujer de 60 años completa una mamografía diagnóstica con vistas magnificadas. ¿Qué patrón de calcificaciones justifica una recomendación de biopsia?",
    "options": [
      "Calcificaciones gruesas típicas en palomitas de maíz.",
      "Calcificaciones redondas dispersas y estables.",
      "Microcalcificaciones finas pleomórficas de aparición reciente, agrupadas y clasificadas BI-RADS 4.",
      "Calcificaciones vasculares típicas."
    ]
  },
  {
    "originalId": "febrero-2023:71",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "En una niña pequeña, la eosinofilia muy marcada con hepatomegalia y lesiones pulmonares migratorias sugiere larva migrans visceral por Toxocara. La exposición a suelo contaminado y la serología ayudan a sustentar el diagnóstico.",
    "o": {
      "A": "La hemosiderosis pulmonar puede causar anemia e infiltrados por hemorragia alveolar, pero la eosinofilia extrema no es típica.",
      "B": "En toxoplasmosis congénita orientan más las manifestaciones oculares y neurológicas que los infiltrados erráticos eosinofílicos.",
      "D": "Una neoplasia hematológica entra en el diferencial de hipereosinofilia persistente, pero el patrón hepatopulmonar migratorio en esta edad orienta primero a parasitosis."
    },
    "src": "CDC · Clinical Overview of Toxocariasis, compromiso visceral",
    "src_url": "https://www.cdc.gov/toxocariasis/hcp/clinical-overview/index.html"
  },
  {
    "originalId": "febrero-2023:72",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Ante un trazado patológico durante la infusión, se suspende la oxitocina, se solicita evaluación obstétrica urgente y se corrigen causas reversibles. Si el patrón persiste o el estado fetal empeora, se acelera el nacimiento.",
    "o": {
      "B": "Aumentar oxitocina puede agravar el compromiso de la oxigenación fetal.",
      "C": "La vía y urgencia del nacimiento dependen de la evaluación. Prepararlo cuando corresponde no debe demorar la suspensión de la infusión.",
      "D": "Mantener la misma infusión sin intervención desatiende el deterioro del registro."
    },
    "src": "NICE NG229 · Fetal monitoring in labour, medidas conservadoras y revisión obstétrica urgente",
    "src_url": "https://www.nice.org.uk/guidance/ng229/resources/fetal-monitoring-in-labour-pdf-66143844065221",
    "stem": "Durante una inducción con oxitocina, una gestante de término presenta seis contracciones en diez minutos y desaceleraciones tardías repetidas. Está a 6 cm y el parto no es inminente. Mientras se convoca al equipo obstétrico y se evalúa el nacimiento expedito, ¿qué medida debe tomarse inmediatamente con la infusión?",
    "options": [
      "Suspender la oxitocina.",
      "Aumentar la dosis de oxitocina.",
      "Mantener la infusión hasta llegar al quirófano.",
      "Continuar la misma dosis y reevaluar recién en una hora."
    ]
  },
  {
    "originalId": "febrero-2023:73",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Una persona con capacidad para decidir puede rechazar la diálisis después de recibir información comprensible, sin obligación de expresar un motivo. El equipo documenta la decisión informada y ofrece seguimiento y cuidados acordes.",
    "o": {
      "B": "Corresponde registrar el rechazo y la información brindada. No se puede exigir al paciente que justifique su decisión por escrito.",
      "C": "La intervención social puede acompañar si el paciente lo desea, pero no corresponde buscar autorización para imponer el tratamiento.",
      "D": "La familia no sustituye la voluntad de una persona capaz que ya expresó su decisión."
    },
    "src": "Ley nacional 26.529 · Derechos del paciente, artículo 2 inciso e, autonomía de la voluntad",
    "src_url": "https://www4.diputados.gov.ar/dependencias/dsecretaria/Leyes/26529.pdf"
  },
  {
    "originalId": "febrero-2023:74",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "La PCR positiva para CMV en orina del segundo día documenta infección congénita. La toma dentro de las primeras tres semanas permite distinguirla de una adquisición posnatal. Microcefalia y petequias son compatibles.",
    "o": {
      "A": "El Chagas congénito requiere pruebas dirigidas a T. cruzi. No explica la detección específica de CMV.",
      "C": "El VIH perinatal se diagnostica con pruebas virológicas específicas para VIH.",
      "D": "Zika también puede causar microcefalia, pero el resultado virológico del caso identifica CMV."
    },
    "src": "CDC · Laboratory Testing for CMV and Congenital CMV, PCR neonatal",
    "src_url": "https://www.cdc.gov/cytomegalovirus/php/laboratories/index.html",
    "stem": "Recién nacido con microcefalia y petequias. En orina del segundo día de vida se detecta CMV por PCR. ¿Cuál es la etiología?",
    "options": [
      "Chagas",
      "Citomegalovirus",
      "Virus de la inmunodeficiencia humana",
      "Zika"
    ]
  },
  {
    "originalId": "febrero-2023:75",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "Con síntomas de malabsorción, se solicitan anticuerpos IgA antitransglutaminasa tisular e IgA total mientras la niña consume gluten. Si hay déficit de IgA, se eligen pruebas específicas de tipo IgG.",
    "o": {
      "A": "La antigliadina convencional y la antirreticulina no integran el estudio inicial preferido.",
      "B": "Iniciar por pruebas IgG sin conocer la IgA total no es la estrategia habitual a esta edad.",
      "D": "HLA-DQ2/DQ8 tiene utilidad en situaciones seleccionadas. Un resultado positivo es frecuente y no confirma celiaquía."
    },
    "src": "Sociedad Argentina de Pediatría · Enfermedad celíaca en pediatría, algoritmo diagnóstico, 2024",
    "src_url": "https://www.sap.org.ar/uploads/consensos/consensos_enfermedad-celiaca-en-pediatria-caracteristicas-clinicas-y-metodologia-diagnostica-151.pdf"
  },
  {
    "originalId": "febrero-2023:76",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Tras la rotura del preservativo hace 12 horas puede tomar levonorgestrel 1,5 mg cuanto antes. El tabaquismo, la migraña y el propranolol no contraindican esta anticoncepción de emergencia sin estrógeno.",
    "o": {
      "B": "Una dosis aislada de 0,75 mg no alcanza la dosis total recomendada.",
      "C": "No hay en el caso una contraindicación para el levonorgestrel de emergencia.",
      "D": "Los análisis de rutina no son requisito previo y demorarían una intervención cuya eficacia depende del tiempo."
    },
    "src": "AMAdA · Consenso de anticoncepción de emergencia 2026, levonorgestrel oral",
    "src_url": "https://amada.org.ar/images/AMAdA_Consenso_de_anticoncepcion_de_emergencia_2026.pdf"
  },
  {
    "originalId": "febrero-2023:77",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "El dolor al retirar la mano después de la palpación sugiere irritación del peritoneo. En este contexto justifica evaluar con urgencia causas quirúrgicas y ginecológicas. No determina por sí mismo cuál es la causa.",
    "o": {
      "A": "Los ruidos disminuidos son inespecíficos y pueden aparecer en un íleo.",
      "B": "La puñopercusión lumbar dolorosa orienta más a patología renal o urinaria.",
      "C": "La equimosis periumbilical de Cullen es un signo cutáneo y no equivale al dolor a la descompresión."
    },
    "src": "Manual MSD profesional · Dolor abdominal agudo, examen físico",
    "src_url": "https://www.msdmanuals.com/es/professional/trastornos-gastrointestinales/abdomen-agudo-y-gastroenterolog%C3%ADa-quir%C3%BArgica/dolor-abdominal-agudo",
    "stem": "Mujer de 30 años con dolor agudo en abdomen inferior, fiebre y vómitos. ¿Qué hallazgo orienta de manera más directa a irritación peritoneal?",
    "options": [
      "Disminución de ruidos hidroaéreos.",
      "Puñopercusión lumbar positiva.",
      "Equimosis periumbilical (signo de Cullen).",
      "Dolor a la descompresión (signo de Blumberg)."
    ]
  },
  {
    "originalId": "febrero-2023:78",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "El signo de Romaña combina edema indoloro de ambos párpados de un mismo ojo con adenopatía regional. En el contexto epidemiológico apropiado sugiere puerta de entrada conjuntival de T. cruzi y requiere estudio de infección aguda.",
    "o": {
      "A": "La conjuntivitis viral puede dar adenopatía preauricular, pero explica peor el edema bipalpebral elástico e indoloro característico en este contexto.",
      "C": "La dacriocistitis suele producir dolor y tumefacción localizada sobre el saco lagrimal, junto al canto medial.",
      "D": "La blefaritis suele manifestarse con irritación y descamación del borde palpebral, sin este complejo ganglionar."
    },
    "src": "Ministerio de Salud de la Nación · Guía para la atención al paciente con enfermedad de Chagas, complejo oftalmoganglionar",
    "src_url": "https://servicios.infoleg.gob.ar/infolegInternet/anexos/320000-324999/320471/res461.pdf",
    "stem": "Paciente de zona endémica con exposición a vinchucas, edema elástico e indoloro de los párpados superior e inferior de un solo ojo y adenopatía preauricular ipsilateral. ¿Qué diagnóstico y signo corresponden?",
    "options": [
      "Conjuntivitis viral.",
      "Chagas agudo con signo de Romaña.",
      "Dacriocistitis aguda.",
      "Blefaritis."
    ]
  },
  {
    "originalId": "febrero-2023:79",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "Para esta paciente corresponden antigripal anual, una dosis de vacuna neumocócica conjugada de 20 serotipos al no tener dosis previas y refuerzo de doble bacteriana de adultos al cumplirse diez años. Se revisa además el resto del carnet.",
    "o": {
      "A": "El refuerzo habitual de doble bacteriana después de un esquema primario completo es cada diez años, no cada cinco.",
      "B": "La vacuna neumocócica no se indica todos los años.",
      "D": "La doble bacteriana sola deja sin cubrir las indicaciones de gripe y neumococo."
    },
    "src": "Ministerio de Salud de la Nación · Calendario nacional de vacunación, personas de 65 años y más",
    "src_url": "https://www.argentina.gob.ar/salud/vacunas/vacunacion-adultosmayores",
    "stem": "Mujer de 65 años en la Argentina, sin dosis previas contra neumococo y con esquema primario antitetánico completo. Su última doble bacteriana fue hace diez años y todavía no recibió la antigripal de esta temporada. Entre estas tres inmunizaciones, ¿qué corresponde ofrecer?",
    "options": [
      "Antigripal anual y doble bacteriana cada cinco años, sin neumococo.",
      "Antigripal y neumocócica anuales, más doble bacteriana cada diez años.",
      "Antigripal de la temporada, VCN20 y refuerzo de doble bacteriana de adultos.",
      "Solo refuerzo de doble bacteriana."
    ]
  },
  {
    "originalId": "febrero-2023:80",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "El contacto estrecho con tuberculosis pulmonar bacilífera requiere evaluación aunque el niño esté asintomático. La radiografía busca enfermedad pulmonar y la prueba de infección ayuda a orientar el manejo. Una prueba temprana negativa no descarta infección reciente.",
    "o": {
      "A": "Esperar síntomas demora el estudio del contacto y la oportunidad de prevención.",
      "C": "Solicitar solo baciloscopías de esputo no reemplaza la evaluación clínica, radiográfica y de infección en un niño asintomático.",
      "D": "Antes de dar tratamiento preventivo hay que descartar enfermedad activa y considerar la sensibilidad del caso fuente."
    },
    "src": "Ministerio de Salud de la Nación · Pautas técnicas de tuberculosis en la Argentina, estudio de contactos pediátricos",
    "src_url": "https://panel.aam.org.ar/img_up/24042026.0.pdf",
    "stem": "Niño de cinco años, asintomático, contacto estrecho diario de una cuidadora con tuberculosis pulmonar bacilífera confirmada. Ya se realizó anamnesis y examen físico. ¿Qué evaluación inicial corresponde antes de decidir tratamiento preventivo?",
    "options": [
      "Esperar y estudiar únicamente si aparece tos.",
      "Solicitar radiografía de tórax y prueba de infección tuberculosa (PPD o IGRA según disponibilidad).",
      "Solicitar solo esputo seriado para baciloscopía.",
      "Iniciar isoniacida como única intervención sin evaluar enfermedad activa."
    ]
  },
  {
    "originalId": "febrero-2023:81",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "Fumó 20 cigarrillos diarios, equivalentes a un paquete estándar por día, durante 70 menos 18, es decir, 52 años. La exposición acumulada es de 52 paquetes-año.",
    "o": {
      "A": "Dieciocho es la edad de inicio y no la duración de la exposición.",
      "C": "Setenta es la edad actual e incluye años en los que no fumaba.",
      "D": "Contar cada atado de diez como un paquete estándar duplica la exposición real."
    },
    "src": "National Cancer Institute · Dictionary of Cancer Terms, pack year",
    "src_url": "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/pack-year"
  },
  {
    "originalId": "febrero-2023:82",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "La hipoxemia grave persistente junto con incapacidad para proteger la vía aérea y compromiso circulatorio exige intubación y ventilación invasiva con soporte hemodinámico. La ventilación no invasiva requiere condiciones de seguridad ausentes aquí.",
    "o": {
      "A": "Reducir el oxígeno agravaría la hipoxemia. Debe titularse y asegurarse ventilación efectiva.",
      "C": "Puede repetirse la gasometría durante el manejo, pero esperar sin sostén respiratorio expone a paro.",
      "D": "El bicarbonato no corrige la insuficiencia respiratoria ni protege la vía aérea."
    },
    "src": "GOLD 2027 · Manejo de las exacerbaciones, indicaciones de ventilación mecánica invasiva",
    "src_url": "https://goldcopd.org/wp-content/uploads/2026/11/GOLD-Report-2027-FINAL-v1.0-15Nov2026_Reduced_WMV.pdf",
    "stem": "Adulto con EPOC y deterioro respiratorio agudo. Está obnubilado, no protege la vía aérea y presenta hipotensión con hipoperfusión pese a la reanimación inicial. FR 40/min, saturación 77 % y PaO₂ 50 mmHg pese a oxígeno suplementario. ¿Cuál es la conducta respiratoria inmediata?",
    "options": [
      "Disminuir la fracción inspirada de oxígeno.",
      "Intubar e iniciar ventilación mecánica invasiva, junto con el sostén circulatorio.",
      "Esperar otra gasometría sin modificar el soporte.",
      "Administrar bicarbonato como única medida."
    ]
  },
  {
    "originalId": "febrero-2023:83",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "En pacientes sintomáticos con fracción de eyección ≤35 %, enalapril redujo la mortalidad frente a placebo en el ensayo SOLVD. El paciente tiene disnea de esfuerzo y una fracción de eyección del 34 %.",
    "o": {
      "A": "La digoxina puede reducir internaciones, pero no demostró prolongar la supervivencia global.",
      "C": "La furosemida alivia la congestión. La mejoría de la disnea no demuestra un beneficio sobre la mortalidad.",
      "D": "El dinitrato aislado no tiene la evidencia pronóstica de la combinación hidralazina–dinitrato en pacientes seleccionados."
    },
    "src": "SOLVD Treatment · Análisis de mortalidad en insuficiencia cardíaca sistólica",
    "src_url": "https://pubmed.ncbi.nlm.nih.gov/22257685/"
  },
  {
    "originalId": "febrero-2023:84",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "Ante una mordedura transdérmica por un perro con rabia confirmada, el chico sin vacunación antirrábica previa necesita vacuna e inmunoglobulina antirrábica infiltrada en la herida y alrededor de ella. El calendario infantil habitual no confiere inmunidad antirrábica.",
    "o": {
      "A": "Esperar síntomas pierde la oportunidad de prevenir la enfermedad.",
      "C": "La vacuna induce inmunidad activa, pero en esta exposición grave también corresponde protección pasiva inmediata.",
      "D": "La inmunoglobulina sola aporta protección transitoria y no reemplaza el esquema de vacunación."
    },
    "src": "Ministerio de Salud de la Nación · Guía para la prevención, vigilancia y control de la rabia, profilaxis posexposición",
    "src_url": "https://servicios.infoleg.gob.ar/infolegInternet/anexos/310000-314999/311546/RES1144.pdf",
    "stem": "Un chico de 7 años sin vacunación antirrábica previa consulta el mismo día de una mordedura profunda en la pierna. Zoonosis confirma rabia en el perro. Después del lavado de la herida, ¿qué profilaxis específica contra la rabia corresponde iniciar?",
    "options": [
      "Vigilar al niño e iniciar profilaxis si aparece fiebre.",
      "Iniciar vacuna e infiltrar inmunoglobulina antirrábica en la herida y sus bordes.",
      "Administrar únicamente vacuna antirrábica.",
      "Administrar únicamente inmunoglobulina antirrábica."
    ]
  },
  {
    "originalId": "febrero-2023:85",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "La necesidad de vasopresores por shock asociado a la neumonía es un criterio mayor de gravedad. Requiere UTI junto con antibióticos y soporte respiratorio y hemodinámico inmediatos.",
    "o": {
      "A": "El paciente depende de un vasopresor. Un esquema oral ambulatorio es insuficiente.",
      "B": "La observación en guardia puede servir durante la estabilización, pero no es el destino definitivo adecuado.",
      "C": "En sala general no se brinda el nivel de monitorización y titulación del vasopresor que exige este cuadro."
    },
    "src": "BMJ · Management of pneumonia in critically ill patients, criterios de neumonía grave",
    "src_url": "https://www.bmj.com/content/375/bmj-2021-065871",
    "stem": "Varón de 67 años con fiebre, disnea, confusión e infiltrado basal derecho de adquisición comunitaria. Tras la reposición inicial adecuada de volumen persiste hipotenso y requiere noradrenalina para sostener la presión arterial. Ya inició antibióticos. ¿Qué nivel de atención corresponde?"
  },
  {
    "originalId": "febrero-2024:1",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "El aislamiento se cuenta desde el inicio de la tumefacción parotídea. El chico debe permanecer fuera de la escuela hasta que hayan transcurrido cinco días desde ese inicio.",
    "o": {
      "A": "Siete días prolongan el plazo indicado por los CDC para este cuadro.",
      "B": "Nueve días corresponden a una recomendación histórica de aislamiento.",
      "D": "Cuarenta días exceden ampliamente el período indicado desde el inicio de la tumefacción."
    },
    "src": "CDC · Clinical Overview of Mumps, aislamiento",
    "src_url": "https://www.cdc.gov/mumps/hcp/clinical-overview/index.html",
    "stem": "Un escolar tiene parotiditis por virus de las paperas. Según los CDC, ¿cuántos días debe permanecer fuera de la escuela desde que comenzó la tumefacción parotídea?"
  },
  {
    "originalId": "febrero-2024:2",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "El corte de piedra expone a sílice cristalina. La combinación de nódulos en lóbulos superiores y calcificación periférica ganglionar orienta a silicosis.",
    "o": {
      "A": "La sarcoidosis también puede comprometer ganglios hiliares, pero la exposición ocupacional y el patrón nodular favorecen silicosis.",
      "C": "El timoma suele presentarse como una masa del mediastino anterior.",
      "D": "Un linfoma puede producir adenopatías, pero no explica tan bien el patrón pulmonar en este trabajador."
    },
    "src": "MSD Manual Professional · Silicosis, eggshell calcifications",
    "src_url": "https://www.msdmanuals.com/professional/multimedia/image/silicosiseggshell-calcifications",
    "stem": "Un trabajador del corte de piedra presenta nódulos pulmonares de predominio superior y adenopatías hiliares con calcificación periférica en cáscara de huevo. ¿Qué neumoconiosis es más probable?",
    "options": [
      "Sarcoidosis",
      "Silicosis",
      "Timoma",
      "Linfoma"
    ]
  },
  {
    "originalId": "febrero-2024:3",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "El tadalafilo inhibe la PDE5 y potencia la vasodilatación mediada por GMP cíclico. La combinación con nitratos orgánicos puede provocar hipotensión profunda y está contraindicada.",
    "o": {
      "B": "Con losartán corresponde evaluar la presión arterial, pero no hay la contraindicación propia de los nitratos.",
      "C": "Los tricíclicos pueden favorecer hipotensión ortostática y disfunción sexual, sin constituir la interacción específica preguntada.",
      "D": "Los betabloqueantes requieren valorar tolerancia hemodinámica, pero no son nitratos ni comparten esa contraindicación."
    },
    "src": "DailyMed · Tadalafil, contraindicaciones e interacciones con nitratos",
    "src_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ad288e9d-020a-43a0-9c07-320c5c3bbc1e"
  },
  {
    "originalId": "febrero-2024:4",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "Sentarse sin apoyo, balbucear cadenas de sonidos y reaccionar ante desconocidos integran la lista de los 9 meses. La lista expresa lo que alcanza la mayoría a esa edad, no la fecha exacta de aparición en cada chico.",
    "o": {
      "A": "A los 2 meses todavía se evalúan habilidades más tempranas, como mirar caras.",
      "B": "A los 4 meses sostener la cabeza es esperable, pero no se exige sedestación autónoma.",
      "C": "A los 6 meses puede apoyarse con las manos al sentarse. El conjunto descrito integra la lista posterior."
    },
    "src": "CDC · Indicadores en acción a los 9 meses",
    "src_url": "https://www.cdc.gov/act-early/es/milestones-in-action/9-months.html",
    "stem": "¿En cuál de estas listas de indicadores del desarrollo de los CDC figuran juntos sentarse sin apoyo, repetir sonidos como «mamamama» y mostrarse tímido o temeroso ante desconocidos?",
    "options": [
      "2 meses.",
      "4 meses.",
      "6 meses.",
      "9 meses."
    ]
  },
  {
    "originalId": "febrero-2024:5",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Un absceso isquiorrectal evidente requiere incisión y drenaje oportunos. La profundidad y la tolerancia del paciente orientan la elección de la anestesia.",
    "o": {
      "B": "La TC puede servir si la colección es oculta o compleja. En este caso ya está localizada.",
      "C": "Con fiebre pueden agregarse antibióticos, pero solos no evacúan la colección.",
      "D": "La punción aislada no asegura el vaciamiento adecuado de un absceso anorrectal."
    },
    "src": "ASCRS · Clinical Practice Guidelines for the Management of Anorectal Abscess, 2022",
    "src_url": "https://doi.org/10.1097/dcr.0000000000002473",
    "stem": "Varón de 35 años con fiebre y dolor perianal. El examen quirúrgico confirma un absceso isquiorrectal izquierdo bien localizado. ¿Qué intervención permite controlar el foco?",
    "options": [
      "Incisión y drenaje bajo anestesia adecuada.",
      "Diferir el tratamiento hasta obtener una TC de rutina.",
      "Indicar únicamente antibióticos y observar.",
      "Realizar solamente una punción aspirativa."
    ]
  },
  {
    "originalId": "febrero-2024:6",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "Las ondas P y los QRS mantienen ritmos regulares independientes. La frecuencia auricular supera a la ventricular y el PR cambia porque existe disociación AV con ritmo de escape.",
    "o": {
      "A": "En el primer grado cada P conduce con un PR prolongado y constante.",
      "B": "En Mobitz I el PR se alarga antes de una P bloqueada. Se mantiene conducción en parte de los latidos.",
      "D": "En Mobitz II los latidos conducidos mantienen una relación PR estable. Un hemibloqueo no explica la independencia completa de ambos ritmos."
    },
    "src": "Manual MSD profesional · Bloqueo auriculoventricular, bloqueo de tercer grado",
    "src_url": "https://www.msdmanuals.com/es/professional/trastornos-cardiovasculares/arritmias-card%C3%ADacas-espec%C3%ADficas/bloqueo-auriculoventricular"
  },
  {
    "originalId": "febrero-2024:15",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "Persisten exacerbaciones pese a dos broncodilatadores de acción prolongada. Con 350 eosinófilos/µL se espera beneficio al agregar un corticoide inhalado y mantener LABA y LAMA.",
    "o": {
      "A": "El salbutamol es de rescate y no sustituye el tratamiento de mantenimiento para prevenir exacerbaciones.",
      "B": "Dejar sólo tiotropio retira el LABA sin agregar tratamiento antiinflamatorio.",
      "C": "Salmeterol y formoterol son ambos LABA. Combinarlos duplica el mecanismo y omite el LAMA."
    },
    "src": "GOLD 2027 Pocket Guide · Follow-up pharmacological treatment",
    "src_url": "https://goldcopd.org/wp-content/uploads/2026/11/GOLD-2027-POCKET-GUIDE-v1.1-20Nov2026_WMV.pdf",
    "stem": "Paciente con EPOC y exacerbaciones persistentes pese a LABA/LAMA, técnica correcta y eosinófilos de 350/µL. Según GOLD, ¿cómo escalar el tratamiento inhalatorio?",
    "options": [
      "Salbutamol a demanda.",
      "Tiotropio cada 24 horas.",
      "Combinación de salmeterol con formoterol.",
      "Combinación de budesonide con formoterol y tiotropio."
    ]
  },
  {
    "originalId": "febrero-2024:16",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "La diarrea crónica con sangre y la inflamación mucosa continua desde el recto, con distorsión de criptas, favorecen colitis ulcerosa una vez evaluadas las causas infecciosas.",
    "o": {
      "B": "El intestino irritable no causa sangrado inflamatorio ni distorsión histológica de las criptas.",
      "C": "La amebiasis puede producir disentería, pero la prueba específica negativa y la distribución continua con cambios crónicos favorecen colitis ulcerosa.",
      "D": "La colitis por C. difficile suele ser aguda. La prueba negativa y el patrón histológico crónico orientan a otra causa."
    },
    "src": "ACG Clinical Guideline Update · Ulcerative Colitis in Adults, diagnóstico, 2025",
    "src_url": "https://gi.org/journals-publications/ebgi/alkazzi_aug2025/",
    "stem": "Mujer de 32 años con seis meses de diarrea con moco y sangre. Los estudios de materia fecal, incluidos C. difficile y E. histolytica, son negativos. La colonoscopía muestra inflamación continua desde el recto y las biopsias muestran distorsión de criptas. ¿Cuál es el diagnóstico más probable?"
  },
  {
    "originalId": "febrero-2024:17",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "Un pH pleural ≤7,20 en un derrame paraneumónico no purulento indica alto riesgo de infección pleural complicada. Si existe una ventana segura, corresponde drenaje además del antibiótico.",
    "o": {
      "A": "Los criterios de Light distinguen exudado de trasudado mediante proteínas y LDH. No responden la decisión inmediata planteada por este pH.",
      "B": "El pH no permite excluir insuficiencia cardíaca concomitante.",
      "D": "El pH orienta al control del foco. No establece por sí solo una duración fija del antibiótico."
    },
    "src": "British Thoracic Society · Guideline for pleural disease, pleural infection, 2023",
    "src_url": "https://thorax.bmj.com/content/thoraxjnl/early/2023/08/08/thorax-2023-220304.full.pdf",
    "stem": "Paciente con neumonía y derrame pleural. Se obtiene líquido no purulento con pH 7,12 medido correctamente. La ecografía muestra una colección accesible para drenaje. ¿Qué decisión orienta principalmente este resultado?",
    "options": [
      "Clasificar el líquido por los criterios de Light exclusivamente con el pH.",
      "Descartar insuficiencia cardíaca concomitante.",
      "Indicar drenaje por derrame paraneumónico complicado.",
      "Fijar la duración del antibiótico en exactamente 21 días."
    ]
  },
  {
    "originalId": "febrero-2024:18",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "En pacientes con cirrosis candidatos a tratamiento del hepatocarcinoma se recomienda vigilancia semestral con ecografía y alfafetoproteína. Una elevación aislada no confirma el diagnóstico.",
    "o": {
      "A": "El CEA se utiliza principalmente en el seguimiento de algunos tumores colorrectales.",
      "C": "El CA 19-9 puede elevarse en enfermedad pancreatobiliar. No es el marcador indicado para esta vigilancia.",
      "D": "El CA 125 puede elevarse incluso por ascitis y no se recomienda para vigilar hepatocarcinoma."
    },
    "src": "ACG · Clinical Guideline: Preventive Care for Patients With Cirrhosis, recomendación 7",
    "src_url": "https://doi.org/10.14309/ajg.0000000000004186",
    "stem": "En un adulto con cirrosis candidato a tratamiento si se detecta un hepatocarcinoma, ¿qué marcador se combina con la ecografía hepática en la vigilancia semestral recomendada por el ACG?"
  },
  {
    "originalId": "febrero-2024:19",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "La necrosis rápidamente progresiva del periné y los genitales después de una intervención proctológica es característica de la gangrena de Fournier, una fascitis necrosante que exige evaluación quirúrgica urgente.",
    "o": {
      "A": "La localización perineogenital define el cuadro. Sin cultivo no corresponde atribuirlo a un único anaerobio.",
      "B": "Una celulitis superficial no explica la necrosis fulminante con extensión por planos fasciales.",
      "D": "El tétanos produce rigidez y espasmos musculares, no necrosis perineogenital progresiva."
    },
    "src": "EAU Guidelines on Urological Infections 2026 · Fournier’s gangrene",
    "src_url": "https://d56bochluxqnz.cloudfront.net/documents/full-guideline/EAU-Guidelines-on-Urological-Infections-2026.pdf"
  },
  {
    "originalId": "febrero-2024:20",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "En la hiponatremia crónica el cerebro pierde osmoles para adaptarse. Una suba demasiado rápida del sodio puede lesionar la mielina pontina o extrapontina, con deterioro neurológico a veces diferido.",
    "o": {
      "A": "Un ACV focal no es la complicación osmótica característica de la sobrecorrección.",
      "B": "La encefalopatía por edema cerebral se asocia especialmente al descenso agudo del sodio.",
      "D": "La sobrecorrección eleva la natremia. No define un síndrome de hiponatremia refractaria."
    },
    "src": "Guía europea de hiponatremia · Clinical practice guideline on diagnosis and treatment of hyponatraemia",
    "src_url": "https://academic.oup.com/ejendo/article/170/3/G1/6668028?login=false",
    "stem": "Paciente con hiponatremia crónica, sodio inicial de 112 mmol/L y desnutrición. La natremia aumenta 18 mmol/L en 24 horas. ¿Qué complicación neurológica se debe sospechar si aparecen disartria y disfagia días después?"
  },
  {
    "originalId": "febrero-2024:21",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "Corresponde tratar la bacteriuria asintomática del embarazo para reducir el riesgo de pielonefritis. La cefalexina según sensibilidad por siete días es una opción. El consenso argentino recomienda urocultivo de control una semana después de terminar.",
    "o": {
      "A": "La ausencia de síntomas define la bacteriuria asintomática y no elimina la indicación de tratarla en el embarazo.",
      "B": "La norfloxacina no es de elección durante el embarazo cuando hay un betalactámico activo.",
      "D": "La nitrofurantoína no cubriría esta cepa resistente y ya se confirmó la bacteriuria."
    },
    "src": "Consenso Argentino Intersociedades de Infección Urinaria · Bacteriuria asintomática en embarazadas, Medicina (B Aires) 2020",
    "src_url": "https://smiba.org.ar/downloads/cursos2024/infectologia_03.pdf",
    "stem": "Embarazada de 16 semanas sin síntomas urinarios ni alergias. Dos urocultivos de chorro medio bien tomados aíslan ≥100.000 UFC/mL de la misma E. coli, sensible a cefalexina y resistente a nitrofurantoína. ¿Qué conducta corresponde?"
  },
  {
    "originalId": "febrero-2024:22",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "El absceso tuboovárico requiere internación, antibióticos parenterales iniciales de amplio espectro y cobertura anaerobia. Se controla la respuesta clínica y se reevalúa la necesidad de drenaje si no mejora.",
    "o": {
      "A": "La analgesia no trata la infección y el alta inicial omite la observación hospitalaria.",
      "B": "Un antifúngico oral no cubre la flora bacteriana involucrada.",
      "C": "Retirar un DIU, si lo hubiera, no trata el absceso ni sustituye los antibióticos."
    },
    "src": "CDC · Sexually Transmitted Infections Treatment Guidelines, enfermedad inflamatoria pélvica, absceso tuboovárico",
    "src_url": "https://www.cdc.gov/std/treatment-guidelines/STI-Guidelines-2021.pdf",
    "stem": "Paciente con enfermedad inflamatoria pélvica y absceso tuboovárico, estable, sin rotura ni peritonitis. ¿Cuál es el tratamiento inicial?",
    "options": [
      "Analgésicos y alta",
      "Antifúngico oral",
      "Retirar el DIU como única medida",
      "Internación y antibióticos de amplio espectro con cobertura anaerobia"
    ]
  },
  {
    "originalId": "febrero-2024:23",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "Un adulto inconsciente con respiración agónica y sin pulso identificable en hasta diez segundos debe recibir RCP de inmediato. Con testigos disponibles se delegan la llamada y la búsqueda del DEA para no demorar las compresiones.",
    "o": {
      "A": "Esperar al servicio de emergencias prolonga el tiempo sin circulación.",
      "B": "Las boqueadas agónicas no son respiración normal. Ante la ausencia de pulso, la posición lateral no reemplaza la RCP.",
      "C": "Las ventilaciones aisladas corresponden al paro respiratorio con pulso. En este caso también se necesitan compresiones."
    },
    "src": "AHA 2025 · Adult Basic Life Support Algorithm for Health Care Professionals",
    "src_url": "https://cpr.heart.org/-/media/CPR-Files/CPR-Guidelines-Files/2025-Algorithms/Algorithm-BLS-Adult-Healthcare-250701.pdf?sc_lang=es",
    "stem": "En la vía pública de CABA, con la escena segura, un adulto se desploma. Como profesional de salud comprobás que no responde, sólo boquea y no identificás pulso en diez segundos. Hay dos testigos disponibles. ¿Qué hacés?",
    "options": [
      "Pedir que llamen al 107 y esperar a la ambulancia.",
      "Colocarlo de costado porque las boqueadas indican respiración eficaz.",
      "Dar sólo ventilaciones hasta que recupere el conocimiento.",
      "Delegar la llamada al 107 y la búsqueda de un DEA e iniciar RCP comenzando por compresiones."
    ]
  },
  {
    "originalId": "febrero-2024:24",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "La definición incluye causas vinculadas al embarazo o agravadas por éste o su atención, durante la gestación o hasta 42 días después de su terminación, independientemente de la duración y el sitio del embarazo. Excluye causas accidentales o incidentales.",
    "o": {
      "A": "La edad fértil no demuestra relación temporal ni causal con un embarazo.",
      "B": "Limitarse a la gestación omite el puerperio e incluye fallecimientos por causas incidentales.",
      "D": "Contar sólo el parto omite muertes durante la gestación y después de su terminación."
    },
    "src": "OMS · Global Health Observatory, número de muertes maternas",
    "src_url": "https://www.who.int/data/gho/data/indicators/indicator-details/gho/number-of-maternal-deaths",
    "stem": "Según la OMS, ¿qué defunción se cuenta como muerte materna?",
    "options": [
      "Toda muerte de una mujer en edad fértil.",
      "Toda muerte durante la gestación, cualquiera sea la causa.",
      "Muerte durante el embarazo o hasta 42 días después de su terminación, por una causa relacionada con el embarazo o su atención, o agravada por ellos.",
      "Sólo la muerte que ocurre durante el parto."
    ]
  },
  {
    "originalId": "febrero-2024:25",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "La fiebre y la salida de pus por el conducto de Stenon al masajear la parótida localizan una infección bacteriana supurativa en esa glándula.",
    "o": {
      "A": "La neuralgia del trigémino causa descargas breves de dolor. No produce fiebre ni secreción purulenta.",
      "B": "La parotiditis viral puede producir tumefacción y fiebre, pero la salida de pus orienta a sobreinfección o etiología bacteriana.",
      "D": "Un quiste maxilar no infectado no explica la fiebre ni la secreción por un conducto salival."
    },
    "src": "Manual MSD profesional · Sialoadenitis, manifestaciones clínicas",
    "src_url": "https://www.msdmanuals.com/es/professional/trastornos-otorrinolaringol%C3%B3gicos/trastornos-bucales-y-far%C3%ADngeos/sialoadenitis?ruleredirectid=756",
    "stem": "Paciente con fiebre, parótida aumentada de tamaño y salida de pus por el conducto de Stenon al masajear la glándula. ¿Qué diagnóstico explica mejor el cuadro?",
    "options": [
      "Neuralgia del trigémino",
      "Parotiditis viral",
      "Sialoadenitis bacteriana supurativa de la parótida",
      "Quiste maxilar no infectado"
    ]
  },
  {
    "originalId": "febrero-2024:26",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Un tumor de 2 cm es T1b. Una sola estación mediastínica ipsilateral o subcarinal corresponde a N2a. En la tabla de la novena edición, T1 N2a M0 se agrupa en IIB.",
    "o": {
      "B": "El estadio IA requiere N0. Aquí hay metástasis ganglionar regional.",
      "C": "El estadio IVB requiere metástasis a distancia múltiples. Este caso es M0.",
      "D": "El estadio IIIC corresponde a T3–4 con N3 y M0. El tumor es T1b y la estación subcarinal es N2a."
    },
    "src": "IASLC · Tabla de grupos de estadio TNM pulmonar, 9.ª edición",
    "src_url": "https://www.iaslc.org/file/10870/download?token=ZdsZFnAS",
    "stem": "Según la novena edición TNM de cáncer pulmonar, un tumor de 2 cm sin invasión, con una única estación mediastínica subcarinal comprometida y sin metástasis, corresponde a T1b N2a M0. ¿En qué grupo de estadio anatómico se ubica?",
    "options": [
      "IIB",
      "IA",
      "IVB",
      "IIIC"
    ]
  },
  {
    "originalId": "febrero-2024:27",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "Tras una diabetes gestacional se recomienda una PTOG con 75 g entre las semanas 4 y 12 posparto, con glucemia basal y a las dos horas e interpretación con criterios de población no embarazada. Tanto la semana 6 como la 8 están dentro del intervalo.",
    "o": {
      "A": "La glucemia basal aislada puede pasar por alto una alteración manifiesta sólo a las dos horas.",
      "B": "La carga de 50 g sin ayuno corresponde a una estrategia de tamizaje prenatal.",
      "C": "Esperar seis meses posterga la reclasificación inicial. La HbA1c también puede verse afectada por el recambio eritrocitario y la pérdida de sangre recientes."
    },
    "src": "ADA · Standards of Care in Diabetes 2026, sección 15, recomendación 15.30",
    "src_url": "https://doi.org/10.2337/dc26-s015",
    "stem": "Una paciente con diabetes gestacional consulta después del parto. Según la ADA, ¿qué estudio y qué intervalo se recomiendan para detectar diabetes o prediabetes persistentes?",
    "options": [
      "Sólo glucemia en ayunas a las seis semanas.",
      "Prueba de carga de 50 g sin ayuno entre las semanas 4 y 12.",
      "Esperar seis meses y solicitar únicamente HbA1c.",
      "PTOG con 75 g entre las semanas 4 y 12 posparto."
    ]
  },
  {
    "originalId": "febrero-2024:28",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "Tras un traumatismo, la combinación de shock, disnea intensa, timpanismo y ausencia unilateral de murmullo vesicular obliga a descomprimir de inmediato un neumotórax a tensión. Con personal entrenado se realiza toracostomía abierta seguida de drenaje pleural.",
    "o": {
      "A": "Preparar una videotoracoscopía demoraría el alivio de la presión que está comprometiendo la circulación.",
      "B": "La radiografía puede confirmar el diagnóstico en un paciente estable. Aquí no debe preceder a la descompresión.",
      "D": "Esperar la ecografía prolongaría el shock obstructivo cuando el diagnóstico clínico exige actuar."
    },
    "src": "NICE NG39 · Major trauma, recomendaciones 1.4.1 y 1.4.2",
    "src_url": "https://www.nice.org.uk/guidance/ng39/resources/major-trauma-assessment-and-initial-management-pdf-1837400761285",
    "stem": "En guardia, tras un traumatismo torácico cerrado, un adulto presenta disnea intensa, TA 75/45 mmHg, ingurgitación yugular, timpanismo y ausencia de murmullo vesicular a derecha. Hay un equipo entrenado en toracostomía. ¿Qué conducta tiene prioridad?",
    "options": [
      "Videotoracoscopía diagnóstica.",
      "Radiografía antes de intervenir.",
      "Descompresión torácica inmediata seguida de drenaje pleural.",
      "Esperar la ecografía pleural."
    ]
  },
  {
    "originalId": "febrero-2024:29",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "El inicio súbito de dolor testicular intenso en un adolescente orienta a torsión del cordón espermático y exige evaluación quirúrgica urgente. El signo de Prehn aislado carece de precisión para confirmarla o excluirla.",
    "o": {
      "A": "Un varicocele suele palparse como venas dilatadas del cordón. La trombosis es infrecuente y no es la primera sospecha en este cuadro.",
      "B": "Una hernia complicada suele asociarse a una masa inguinoescrotal irreducible. El dolor se localiza aquí en el testículo.",
      "C": "La orquiepididimitis suele comenzar de forma más gradual y puede acompañarse de síntomas urinarios o fiebre."
    },
    "src": "Irish Association for Emergency Medicine · Clinical Guideline: Testicular Torsion in Adults and Paediatrics",
    "src_url": "https://www.iaem.ie/wp-content/uploads/2022/08/Clinical-Guideline-Testicular-Torsion-in-Adults-and-Peadiatrics.pdf"
  },
  {
    "originalId": "febrero-2024:30",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Un pólipo pediculado resecable se extrae con asa en una pieza para valorar histología y margen. Con una cabeza de 25 mm se debe prever hemostasia del pedículo para reducir el riesgo de sangrado.",
    "o": {
      "B": "Esperar crecimiento retrasa el diagnóstico histológico de una lesión ya resecable y sintomática.",
      "C": "El seguimiento clínico deja sin tratar la posible fuente de sangrado y no aporta tejido.",
      "D": "La fotocoagulación destruiría tejido sin proporcionar una pieza íntegra para el análisis."
    },
    "src": "ESGE · Colorectal polypectomy and endoscopic mucosal resection, actualización 2024, pólipos pediculados",
    "src_url": "https://www.thieme-connect.de/products/ejournals/pdf/10.1055/a-2304-3219.pdf",
    "stem": "Varón de 72 años con rectorragia autolimitada. La colonoscopía muestra un pólipo sigmoideo pediculado de 25 mm, sin signos endoscópicos de invasión profunda y técnicamente resecable en bloque. ¿Cuál es la conducta más adecuada?"
  },
  {
    "originalId": "febrero-2024:31",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "La colangiorresonancia permite buscar cálculos sin instrumentar la papila ni usar rayos X. La ecoendoscopía también es útil en riesgo intermedio, pero implica endoscopía.",
    "o": {
      "B": "La CPRE requiere endoscopía y habitualmente fluoroscopía. Se reserva principalmente para intervención terapéutica.",
      "C": "La colangiografía transhepática percutánea requiere punción y utiliza fluoroscopía.",
      "D": "La tomografía emplea radiación ionizante y puede pasar por alto cálculos pequeños."
    },
    "src": "ASGE · Role of endoscopy in choledocholithiasis, recomendación para probabilidad intermedia",
    "src_url": "https://www.asge.org/docs/default-source/guidelines/asge-guideline-on-the-role-of-endoscopy-in-the-evaluation-and-management-of-choledocholithiasis-2019-june-gie.pdf",
    "stem": "Paciente con probabilidad intermedia de coledocolitiasis sin colangitis. ¿Qué estudio permite evaluar la vía biliar sin endoscopia ni radiación ionizante?",
    "options": [
      "Colangiografía por resonancia nuclear magnética.",
      "Colangiopancreatografía retrógrada endoscópica.",
      "Colangiografía transparietal.",
      "Tomografía de abdomen con contraste oral y endovenoso."
    ]
  },
  {
    "originalId": "febrero-2024:32",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "La videotoracoscopía permite ver la pleura y elegir las zonas que se biopsian. En un derrame recurrente, una citología negativa no descarta enfermedad pleural maligna.",
    "o": {
      "B": "La toracotomía permite inspeccionar y biopsiar, pero requiere una apertura quirúrgica mayor.",
      "C": "La biopsia percutánea puede dirigirse por imágenes, pero no permite inspección endoscópica de la cavidad.",
      "D": "La TC caracteriza el engrosamiento y orienta dónde tomar muestras, pero por sí sola no obtiene tejido."
    },
    "src": "British Thoracic Society · Quality Standard for Pleural Disease, biopsia pleural en derrame sin diagnóstico",
    "src_url": "https://www.brit-thoracic.org.uk/document-library/quality-standards/pleural-disease/bts-quality-standard-for-pleural-disease",
    "stem": "Derrame pleural exudativo recurrente con citología negativa. Se requiere inspeccionar directamente toda la superficie pleural accesible y obtener biopsias dirigidas. ¿Qué procedimiento mínimamente invasivo lo permite?",
    "options": [
      "Videotoracoscopia.",
      "Toracotomía.",
      "Punción biopsia pleural.",
      "TAC de tórax con contraste endovenoso."
    ]
  },
  {
    "originalId": "febrero-2024:33",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "La anhedonia, el insomnio, la fatiga, la concentración disminuida, el aumento de peso y las ideas de muerte persisten más de dos semanas y afectan el funcionamiento. Corresponde evaluar el riesgo suicida aun cuando no exista un plan.",
    "o": {
      "A": "No refiere episodios de manía ni hipomanía que orienten a un trastorno bipolar.",
      "B": "El trastorno esquizoafectivo requiere síntomas psicóticos, incluso durante un período sin episodio afectivo mayor.",
      "C": "No hay delirios, alucinaciones ni desorganización que sustenten esquizofrenia."
    },
    "src": "Manual MSD profesional · Trastornos depresivos, criterios de episodio depresivo mayor",
    "src_url": "https://www.msdmanuals.com/es/professional/trastornos-psiqui%C3%A1tricos/trastornos-del-estado-de-%C3%A1nimo/trastornos-depresivos?ruleredirectid=750",
    "stem": "Varón de 41 años con tres meses de pérdida de interés, insomnio, fatiga, dificultad para concentrarse, aumento significativo de peso e ideas recurrentes de muerte sin plan actual. Los síntomas son casi diarios y afectan su trabajo. No hay síntomas psicóticos, antecedentes de manía o hipomanía, consumo de sustancias ni otra causa médica identificada. ¿Qué diagnóstico explica mejor el cuadro?"
  },
  {
    "originalId": "febrero-2024:34",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "Una glucemia plasmática en ayunas de 138 mg/dL supera el umbral de 126. En una persona asintomática con una sola determinación se requiere confirmación. Repetir la glucemia plasmática en ayunas es una forma válida de obtenerla.",
    "o": {
      "A": "Los hábitos saludables son pertinentes, pero con un solo resultado y sin hiperglucemia inequívoca todavía no se confirma diabetes.",
      "B": "Una glucemia capilar domiciliaria aislada no sustituye la confirmación diagnóstica de laboratorio.",
      "D": "Indicar metformina como tratamiento de una diabetes ya confirmada se adelanta al segundo resultado diagnóstico."
    },
    "src": "ADA · Standards of Care in Diabetes 2026, sección 2, confirmación diagnóstica",
    "src_url": "https://doi.org/10.2337/dc26-S002?trk=article-ssr-frontend-pulse_little-text-block",
    "stem": "Mujer de 45 años, asintomática, con IMC de 32 kg/m². La única medición diagnóstica disponible es una glucemia plasmática de laboratorio de 138 mg/dL tras ocho horas de ayuno. ¿Cuál de estas conductas permite confirmar el diagnóstico?",
    "options": [
      "Comunicar diagnóstico definitivo e iniciar cambios en los hábitos.",
      "Confirmarlo sólo con una medición capilar domiciliaria.",
      "Repetir sin demora la glucemia plasmática en ayunas en el laboratorio.",
      "Comunicar diagnóstico definitivo e iniciar metformina."
    ]
  },
  {
    "originalId": "febrero-2024:35",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "Una cohorte prospectiva mide la exposición en participantes libres del desenlace y registra los casos nuevos durante el seguimiento. Esto establece el orden temporal y permite comparar incidencias entre expuestos y no expuestos.",
    "o": {
      "A": "En casos y controles se selecciona por desenlace y se reconstruye la exposición. No es el seguimiento prospectivo descripto.",
      "B": "En una cohorte observacional el investigador registra la exposición sin asignarla al azar.",
      "D": "Un estudio transversal mide exposición y desenlace en un corte temporal. Ajustar por confusores no recupera por sí solo la secuencia temporal."
    },
    "src": "CDC · Unit II, Analytic Epidemiology, diseño de cohortes",
    "src_url": "https://stacks.cdc.gov/view/cdc/11226/cdc_11226_DS1.pdf",
    "stem": "Se quiere medir la incidencia de enfermedad en personas inicialmente libres de ella, clasificadas según una exposición observada al inicio. ¿Qué diseño permite documentar de forma directa que la exposición se registró antes del desenlace?"
  },
  {
    "originalId": "febrero-2024:36",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "La finalidad que pregunta el caso es detectar un cáncer colorrectal antes de que produzca síntomas. Ese diagnóstico precoz es prevención secundaria. La eventual resección de adenomas también puede prevenir casos futuros de cáncer.",
    "o": {
      "A": "La prevención terciaria busca reducir secuelas de una enfermedad ya establecida. No se describe cáncer diagnosticado.",
      "C": "La prevención cuaternaria procura evitar intervenciones innecesarias y no define el objetivo de detección precoz.",
      "D": "La prevención primaria evita la aparición de enfermedad. Aquí se pregunta por la búsqueda de cáncer ya presente en una persona asintomática."
    },
    "src": "National Cancer Institute · Screening Tests to Detect Colorectal Cancer and Polyps, personas con riesgo aumentado",
    "src_url": "https://www.cancer.gov/types/colorectal/screening-fact-sheet"
  },
  {
    "originalId": "febrero-2024:37",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "Al no considerar dejar de fumar en los próximos seis meses, se encuentra en precontemplación. Conviene dar consejo breve personalizado, explorar qué le preocupa de dejar el cigarrillo y retomar el tema en otro control.",
    "o": {
      "A": "Indicar de entrada tres parches sin acordar un objetivo ni evaluar dependencia no responde a la disposición que expresa.",
      "B": "Reconocer un daño no basta para clasificarlo como contemplativo. Dice que no considera dejar en los próximos seis meses.",
      "D": "Un parche como única intervención omite el consejo y la exploración motivacional que necesita en esta consulta."
    },
    "src": "Ministerio de Salud de la Nación · Algoritmo para la cesación tabáquica, consejo breve e intervención motivacional",
    "src_url": "https://www.fmed.uba.ar/sites/default/files/2024-12/GPC%20Tabaco%20breve.pdf",
    "stem": "Un hombre de 35 años que fuma consulta por un apto laboral. Sabe que fumar le hace mal y dice que no considera dejarlo en los próximos seis meses. Según el modelo de Prochaska, ¿en qué etapa está y qué intervención inicial corresponde?"
  },
  {
    "originalId": "febrero-2024:38",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "La gingivorragia persistente en un caso compatible con dengue es un signo de alarma. Requiere internación con vigilancia de perfusión, diuresis y hematocrito, e hidratación según evolución. El recuento plaquetario inicial no descarta progresión.",
    "o": {
      "A": "El control diferido en domicilio no permite detectar a tiempo deterioro durante la fase crítica.",
      "B": "No hay shock, sangrado grave ni disfunción orgánica que exijan terapia intensiva de entrada.",
      "C": "La confirmación etiológica puede solicitarse, pero no corresponde dar el alta mientras presenta un signo de alarma."
    },
    "src": "Ministerio de Salud de la Nación · Guía de práctica clínica sobre diagnóstico y tratamiento de dengue, signos de alarma",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/2024/09/gpc_dengue_vb_1012025.pdf",
    "stem": "Varón de 68 años con diabetes y viaje reciente a Misiones durante un brote de dengue. Al bajar la fiebre presenta gingivorragia espontánea persistente de escasa cuantía. Está normotenso, bien perfundido, sin dificultad respiratoria ni disfunción orgánica. Plaquetas 160.000/mm³. ¿Qué nivel de atención corresponde?"
  },
  {
    "originalId": "febrero-2024:39",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "La evolución subaguda con tos seca, hipoxemia e infiltrados intersticiales bilaterales en VIH avanzado orienta a neumonía por P. jirovecii. Se indica trimetoprima-sulfametoxazol por 21 días y, con PaO₂ de 67 mmHg en aire ambiente, corticoide adyuvante precoz, idealmente dentro de las primeras 72 horas.",
    "o": {
      "B": "La amoxicilina con clavulánico no es activa contra Pneumocystis.",
      "C": "Amoxicilina con ciprofloxacina no trata esta infección oportunista ni cubre la indicación de corticoide por hipoxemia.",
      "D": "La levofloxacina puede utilizarse en determinadas neumonías bacterianas, pero carece de eficacia frente a Pneumocystis."
    },
    "src": "NIH · Guidelines for Opportunistic Infections in Adults and Adolescents With HIV, Pneumocystis Pneumonia",
    "src_url": "https://clinicalinfo.hiv.gov/sites/clinicalinfo/files/guidelines/documents/adult-adolescent-oi/pneumocystis-pneumonia-adult-adolescent-oi.pdf",
    "stem": "Paciente con VIH sin tratamiento, CD4 de 65/µL, tres semanas de disnea progresiva, tos seca e infiltrados intersticiales bilaterales. La PaO₂ es de 67 mmHg en aire ambiente a nivel del mar. Ante la sospecha de neumonía por Pneumocystis, ¿qué tratamiento corresponde iniciar?",
    "options": [
      "Trimetoprima-sulfametoxazol más corticoide sistémico adyuvante.",
      "Amoxicilina con ácido clavulánico.",
      "Amoxicilina más ciprofloxacina.",
      "Levofloxacina."
    ]
  },
  {
    "originalId": "febrero-2024:40",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "En enfermedad renal crónica con albuminuria A3, un IECA o un ARA II reduce la albuminuria y el riesgo de progresión. Se controlan presión, creatinina y potasio dentro de las dos a cuatro semanas de iniciar o aumentar la dosis.",
    "o": {
      "A": "Un betabloqueante puede tener indicación cardíaca, pero no sustituye el beneficio renal del bloqueo del sistema renina-angiotensina en A3.",
      "B": "Combinar IECA y ARA II aumenta el riesgo de lesión renal aguda e hiperpotasemia y debe evitarse.",
      "C": "Un calcioantagonista puede ayudar a alcanzar el objetivo tensional, pero como monoterapia omite el bloqueo indicado por la albuminuria marcada."
    },
    "src": "KDIGO 2024 · CKD Guideline, recomendaciones 3.6 y control del bloqueo del sistema renina-angiotensina",
    "src_url": "https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf",
    "stem": "Paciente hipertenso con enfermedad renal crónica y albuminuria A3 persistente, sin hiperpotasemia. ¿Cuál es la estrategia con beneficio renal específico?",
    "options": [
      "Betabloqueante como única opción",
      "Combinar un IECA y un ARA II",
      "Calcioantagonista como única medida",
      "Un IECA o un ARA II con control de creatinina y potasio"
    ]
  },
  {
    "originalId": "febrero-2024:41",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "La tira positiva obliga a cuantificar proteinuria, por ejemplo con la relación proteína/creatinina en una muestra aislada. A las 36 semanas se evalúan síntomas, función renal y hepática, plaquetas y bienestar fetal. Si se confirma preeclampsia estable sin criterios para finalizar antes, se planifica el nacimiento desde las 37 semanas.",
    "o": {
      "B": "La presión no está en rango grave. Sin compromiso materno o fetal no se indica cesárea urgente ni sulfato de magnesio de rutina.",
      "C": "Una tira positiva aislada no justifica sulfato de magnesio. Omitir la evaluación fetal dejaría incompleta la valoración.",
      "D": "A las 36 semanas, en ausencia de deterioro, la tira reactiva por sí sola no obliga a inducir de inmediato."
    },
    "src": "NICE NG133 · Hypertension in pregnancy, evaluación de proteinuria y tabla 3 de momento del nacimiento",
    "src_url": "https://www.nice.org.uk/guidance/ng133/resources/hypertension-in-pregnancydiagnosis-and-management-pdf-66141717671365",
    "stem": "Primigesta de 36 semanas con hipertensión gestacional tratada, TA 140/90 mmHg y proteinuria 2+ en tira reactiva. Está asintomática, sin signos clínicos de gravedad y con movimientos fetales conservados. Durante la evaluación obstétrica, ¿cuál es la conducta inicial más adecuada?",
    "options": [
      "Evaluar a la madre y al feto, solicitar plaquetas, creatinina y hepatograma, y cuantificar la proteinuria con relación proteína/creatinina.",
      "Realizar cesárea urgente y administrar sulfato de magnesio.",
      "Administrar sulfato de magnesio por la tira positiva y omitir la evaluación fetal.",
      "Inducir de inmediato sólo por el resultado de la tira."
    ]
  },
  {
    "originalId": "febrero-2024:42",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "Una lesión esplénica aislada de bajo grado en un paciente estable, sin peritonitis ni sangrado activo, permite manejo no operatorio con vigilancia clínica, signos vitales y hemoglobina seriada. En bajo grado se repiten imágenes si la evolución lo justifica.",
    "o": {
      "A": "Un hematoma subcapsular pequeño y no complicado no requiere drenaje percutáneo.",
      "B": "La esplenectomía urgente se reserva para situaciones como inestabilidad persistente o fracaso del manejo conservador.",
      "C": "La TC ya documentó una lesión de bajo grado sin extravasación. La laparotomía sistemática agregaría riesgo sin indicación."
    },
    "src": "WSES · Follow-up strategies for patients with splenic trauma managed non-operatively, consenso 2022",
    "src_url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9560023/",
    "stem": "Tras un traumatismo abdominal cerrado, un adulto está estable y sin peritonismo. La TC con contraste muestra sólo un hematoma esplénico subcapsular grado I sin extravasación ni lesión vascular. El hospital puede monitorizarlo e intervenir si se deteriora. ¿Cuál es la conducta inicial?",
    "options": [
      "Drenaje percutáneo del hematoma.",
      "Esplenectomía de urgencia.",
      "Laparotomía sistemática para evacuar el hematoma.",
      "Manejo no operatorio con controles clínicos y de hemoglobina, e imágenes según evolución."
    ]
  },
  {
    "originalId": "febrero-2024:43",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "El coágulo adherente sobre el lecho ulceroso se clasifica como Forrest IIb. El estado hemodinámico y la presentación con melena no cambian la categoría endoscópica.",
    "o": {
      "A": "Forrest IIc corresponde a una mancha plana pigmentada, sin el relieve de un coágulo adherente.",
      "B": "Forrest III describe una úlcera con base limpia, sin estigmas de hemorragia reciente.",
      "D": "Forrest Ia implica sangrado arterial activo en chorro, ausente en esta endoscopía."
    },
    "src": "ESGE · Guía de hemorragia digestiva alta por úlcera péptica, actualización 2026, clasificación de Forrest",
    "src_url": "https://www.esge.com/assets/downloads/pdfs/guidelines/2026_a-2863-8314.pdf"
  },
  {
    "originalId": "febrero-2024:44",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "La lesión livedoide con centro violáceo, halo pálido y posterior necrosis tras un contacto domiciliario orienta a loxoscelismo cutáneo. Sin identificación del ejemplar, el diagnóstico es presuntivo.",
    "o": {
      "A": "Phoneutria suele causar dolor local inmediato e intenso y manifestaciones autonómicas. La placa livedoide evolutiva favorece Loxosceles.",
      "C": "Latrodectus se asocia con dolor muscular, contracturas y sudoración, más que con necrosis cutánea progresiva.",
      "D": "Steatoda puede producir dolor local y síntomas semejantes a un latrodectismo leve. La placa dermonecrótica orienta a otro género."
    },
    "src": "Ministerio de Salud de la Nación · Guía de prevención, diagnóstico, tratamiento y vigilancia epidemiológica de los envenenamientos por arañas, loxoscelismo",
    "src_url": "https://salud.neuquen.gob.ar/wp-content/uploads/2024/09/Aranas-MSAL-Nacion.pdf",
    "stem": "En Buenos Aires, una persona siente una picadura al ponerse un guante guardado y observa salir una araña que no logra capturar. En las horas siguientes aparece una placa dolorosa violácea con halo pálido que evoluciona a necrosis. ¿Qué araña se sospecha principalmente?"
  },
  {
    "originalId": "febrero-2024:45",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "La disfagia favorece aspiración. La aparición progresiva de fiebre, tos purulenta y una consolidación en un segmento dependiente tres días después apoya neumonía aspirativa. La neumonitis química suele presentarse de forma más brusca tras aspirar contenido gástrico.",
    "o": {
      "B": "Un tromboembolismo puede causar disnea y fiebre, pero explica peor la expectoración purulenta y el infiltrado dependiente después de la aspiración.",
      "C": "El neumotórax muestra aire pleural con colapso pulmonar. No suele producir una consolidación infecciosa dependiente.",
      "D": "El edema cardiogénico suele asociarse a congestión bilateral. La secuencia tras aspiración y la tos purulenta favorecen infección focal."
    },
    "src": "British Thoracic Society · Clinical statement on aspiration pneumonia, diagnóstico clínico y por imágenes",
    "src_url": "https://www.brit-thoracic.org.uk/document-library/clinical-statements/aspiration-pneumonia/bts-clinical-statement-on-aspiration-pneumonia/",
    "stem": "Paciente con disfagia que tres días después de aspirar alimento presenta fiebre, tos purulenta y un nuevo infiltrado en un segmento pulmonar dependiente. ¿Cuál es el diagnóstico más probable?",
    "options": [
      "Neumonía por aspiración",
      "TEP",
      "Neumotórax",
      "Edema cardiogénico"
    ]
  },
  {
    "originalId": "febrero-2024:46",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "Ante hiperpotasemia con cambios electrocardiográficos, el calcio EV estabiliza rápidamente la membrana miocárdica y reduce el riesgo de arritmia. Su efecto es transitorio y se necesitan medidas adicionales para bajar la potasemia.",
    "o": {
      "A": "La insulina con glucosa y los agonistas beta-2 favorecen la entrada de potasio a la célula. El calcio no produce ese desplazamiento.",
      "B": "El gluconato de calcio no quela potasio ni induce su eliminación hepática.",
      "D": "La protección cardíaca ocurre sin aumentar la excreción renal de potasio."
    },
    "src": "Royal Children’s Hospital Melbourne · Clinical Practice Guidelines, Hyperkalaemia",
    "src_url": "https://www.rch.org.au/clinicalguide/guideline_index/hyperkalaemia/",
    "stem": "Un chico de 5 años con enfermedad renal crónica presenta palpitaciones, potasemia de 6,8 mmol/L y ondas T picudas de aparición reciente. Se inicia gluconato de calcio EV bajo monitorización. ¿Qué efecto inmediato se busca?",
    "options": [
      "Desplazar potasio al espacio intracelular.",
      "Quelarlo para favorecer su eliminación hepática.",
      "Antagonizar el efecto de la hiperpotasemia sobre la membrana miocárdica.",
      "Quelarlo para favorecer su eliminación renal."
    ]
  },
  {
    "originalId": "febrero-2024:48",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "El dolor vertebral progresivo acompañado de fiebre obliga a investigar infección vertebral y discal. La RM detecta cambios tempranos y permite evaluar extensión epidural aunque la radiografía inicial sea normal.",
    "o": {
      "B": "Una fractura por compresión puede doler, pero no explica bien la fiebre. La TC dirigida sólo a buscar aplastamiento no evalúa tan bien una infección temprana.",
      "C": "Una metástasis es un diferencial, pero la gammagrafía no es el primer estudio para la asociación de fiebre y dolor vertebral reciente.",
      "D": "La hiperostosis suele ser crónica. Una segunda radiografía simple no permite descartar una espondilodiscitis inicial."
    },
    "src": "IDSA · Native Vertebral Osteomyelitis in Adults, recomendaciones 1 y 8",
    "src_url": "https://www.idsociety.org/practice-guideline/vertebral-osteomyelitis/"
  },
  {
    "originalId": "febrero-2024:49",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "La dobutamina no se usa de rutina como primera medida ante hipotensión séptica. Se considera si persiste hipoperfusión con disfunción cardíaca pese a volumen y presión adecuados. En esta paciente se inician antimicrobianos y reanimación sin demora, con noradrenalina si requiere vasopresor.",
    "o": {
      "A": "Corresponde tomar hemocultivos cuanto antes, idealmente antes del antibiótico si no retrasa su administración.",
      "B": "Los cristaloides forman parte de la reanimación inicial con reevaluación de perfusión y tolerancia.",
      "D": "El lactato ayuda a valorar hipoperfusión y respuesta al tratamiento desde el inicio."
    },
    "src": "Surviving Sepsis Campaign 2026 · Manejo de sepsis y shock séptico en adultos",
    "src_url": "https://sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026"
  },
  {
    "originalId": "febrero-2024:50",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "La regurgitación sistólica hacia la aurícula derecha genera ondas yugulares v o c-v prominentes. Su soplo holosistólico en el borde esternal inferior aumenta al inspirar por el incremento del retorno venoso derecho.",
    "o": {
      "A": "La estenosis aórtica produce un soplo sistólico eyectivo que suele irradiar a las carótidas.",
      "B": "La insuficiencia pulmonar genera un soplo diastólico, no holosistólico.",
      "C": "La regurgitación mitral se escucha mejor en el ápex y puede irradiar a la axila. No explica las ondas yugulares prominentes."
    },
    "src": "Manual MSD profesional · Insuficiencia tricuspídea, signos y síntomas",
    "src_url": "https://www.msdmanuals.com/es/professional/trastornos-cardiovasculares/enfermedades-valvulares/insuficiencia-tricusp%C3%ADdea"
  },
  {
    "originalId": "febrero-2024:51",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "La reticulocitosis, el aumento de bilirrubina indirecta y la caída de haptoglobina orientan a hemólisis. La antiglobulina directa detecta inmunoglobulina o complemento fijados a los glóbulos rojos del paciente.",
    "o": {
      "A": "Los anticuerpos anti-ADN ayudan a evaluar lupus, pero no demuestran sensibilización del eritrocito.",
      "B": "El dosaje de B12 evalúa una causa de anemia megaloblástica, no la presencia de anticuerpos sobre los eritrocitos.",
      "C": "Los anticuerpos antinucleares pueden orientar a una enfermedad autoinmune, pero no identifican por sí mismos hemólisis inmunitaria."
    },
    "src": "Manual MSD profesional · Generalidades sobre la anemia hemolítica, prueba de antiglobulina directa",
    "src_url": "https://www.msdmanuals.com/es/professional/hematolog%C3%ADa/anemias-causadas-por-hem%C3%B3lisis/generalidades-sobre-la-anemia-hemol%C3%ADtica?autoredirectid=49481",
    "stem": "Paciente con anemia, reticulocitosis, bilirrubina indirecta elevada y haptoglobina baja. ¿Qué prueba identifica inmunoglobulina o complemento adheridos al eritrocito?",
    "options": [
      "Anticuerpos anti-DNA.",
      "Vitamina B12.",
      "Anticuerpos antinucleares.",
      "Test de Coombs directa."
    ]
  },
  {
    "originalId": "febrero-2024:52",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "En un incendio en un ambiente cerrado, la alteración neurológica, la hipotensión y un lactato ≥10 mmol/L apoyan intoxicación por cianuro. La hidroxocobalamina EV capta el cianuro y se agrega al oxígeno al 100 % y al sostén vital sin esperar la confirmación.",
    "o": {
      "A": "La cámara hiperbárica puede considerarse en ciertos casos de intoxicación por monóxido de carbono, pero no neutraliza el cianuro.",
      "B": "Reducir el oxígeno al 50 % es inadecuado ante posible exposición concomitante a monóxido de carbono y no aporta el antídoto.",
      "C": "Los líquidos pueden contribuir al sostén hemodinámico, pero no revierten el bloqueo de la respiración celular por cianuro."
    },
    "src": "EMA · Cyanokit, ficha técnica, sección 4.4: inhalación de humo",
    "src_url": "https://www.ema.europa.eu/en/documents/product-information/cyanokit-epar-product-information_en.pdf",
    "stem": "Tras un incendio en un ambiente cerrado con combustión de poliuretano, un adulto presenta hollín en la boca, confusión, hipotensión y lactato plasmático de 12 mmol/L. Mientras recibe oxígeno al 100 % y soporte vital, ¿qué tratamiento específico corresponde agregar ante la sospecha de intoxicación por cianuro?"
  },
  {
    "originalId": "febrero-2024:53",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Después de la primera descarga se reinicia RCP de inmediato, comenzando por compresiones. Se minimiza la pausa y se reevalúa el ritmo después de dos minutos, salvo signos claros de retorno de circulación.",
    "o": {
      "B": "La amiodarona se reserva para FV o TV sin pulso refractaria a descargas. Una dosis de 150 mg no sustituye la RCP inmediata.",
      "C": "En la secuencia de la AHA para ritmo desfibrilable se incorpora adrenalina después de la segunda descarga. Tener vía venosa no modifica la prioridad tras la primera.",
      "D": "La atropina no está indicada en el paro por fibrilación ventricular."
    },
    "src": "American Heart Association 2025 · Adult Cardiac Arrest Algorithm, rama FV/TV sin pulso",
    "src_url": "https://professional.heart.org/-/media/CPR-Files/CPR-Guidelines-Files/2025-Algorithms/Algorithm-ACLS-CA-250527.pdf",
    "stem": "Una mujer de 22 años presenta fibrilación ventricular sin pulso. Se administra la primera descarga y ya tiene acceso venoso. Sin signos de retorno de la circulación, ¿qué corresponde hacer inmediatamente según el algoritmo de la AHA?",
    "options": [
      "Retomar RCP inmediatamente durante dos minutos.",
      "Administrar 150 mg de amiodarona intravenosa.",
      "Administrar 1 mg de adrenalina intravenosa.",
      "Administrar 7 mg de atropina intravenosa."
    ]
  },
  {
    "originalId": "febrero-2024:54",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "El colgajo corresponde a una disección. Toda disección que compromete la aorta ascendente se clasifica como Stanford A, aunque se extienda al arco o el desgarro de entrada esté en otro segmento.",
    "o": {
      "A": "Un pseudoaneurisma es una rotura contenida que se comunica con la luz. No se define por un colgajo que divide dos luces.",
      "C": "Una úlcera penetrante atraviesa una placa aterosclerótica hacia la media. La imagen descripta es un colgajo de disección.",
      "D": "El hematoma intramural típico engrosa la pared aórtica sin un colgajo visible que separe luces."
    },
    "src": "ACC/AHA · Guideline for the Diagnosis and Management of Aortic Disease, clasificación anatómica de la disección",
    "src_url": "https://www.ahajournals.org/doi/pdf/10.1161/CIR.0000000000001106",
    "stem": "La angio-TC demuestra un colgajo de disección en aorta ascendente que se extiende al arco. ¿Cómo se clasifica?",
    "options": [
      "Pseudoaneurisma de aorta.",
      "Disección de aorta tipo A de Stanford.",
      "Úlcera penetrante arteriosclerótica.",
      "Hematoma intramural maligno."
    ]
  },
  {
    "originalId": "febrero-2024:55",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "El trabajo en contacto con agua dulce en el delta, la fiebre con mialgias y la sufusión conjuntival orientan a leptospirosis. La elevación de creatinina y CPK y la hematuria refuerzan la sospecha.",
    "o": {
      "A": "Faltan antecedentes de exposición en una zona de transmisión de malaria. El compromiso conjuntival y renal tras contacto con agua dulce favorece leptospirosis.",
      "B": "El dengue también causa fiebre y mialgias, pero no se describen datos de dengue grave. La leucocitosis neutrofílica y el contexto de exposición orientan a otra causa.",
      "D": "La fiebre hemorrágica argentina es un diferencial regional. La leucopenia y la trombocitopenia tempranas serían más características que esta leucocitosis con plaquetas conservadas."
    },
    "src": "Ministerio de Salud de la Nación · Guía para el equipo de salud: leptospirosis, sospecha clínica",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/bancos/2018-10/0000000489cnt-guia-medica-leptospirosis.pdf"
  },
  {
    "originalId": "febrero-2024:56",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "La diarrea persistente y fétida tras ingerir agua no potable, con quistes de Giardia en materia fecal, indica giardiasis sintomática. Entre las opciones propuestas, el metronidazol por vía oral tiene actividad contra el protozoo.",
    "o": {
      "A": "La vancomicina parenteral se dirige a bacterias grampositivas, no a Giardia.",
      "B": "La ciprofloxacina puede usarse en determinadas diarreas bacterianas. No erradica Giardia.",
      "D": "La vancomicina oral se usa principalmente en infección intestinal por C. difficile y carece de indicación para este parásito."
    },
    "src": "CDC · Patient Care for Giardia Infection, opciones terapéuticas",
    "src_url": "https://www.cdc.gov/giardia/hcp/clinical-care/"
  },
  {
    "originalId": "febrero-2024:57",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "Con CD4 de 50 células/µL, las convulsiones y las lesiones múltiples con realce en anillo, edema y compromiso de ganglios basales sugieren encefalitis toxoplásmica. La imagen orienta el diagnóstico presuntivo, pero no es exclusiva.",
    "o": {
      "B": "La meningococemia suele producir sepsis aguda y puede acompañarse de meningitis o púrpura. No es la explicación típica de múltiples lesiones anulares.",
      "C": "Pneumocystis jirovecii causa principalmente neumonía. Las lesiones focales encefálicas múltiples no son su presentación habitual.",
      "D": "La encefalitis herpética suele comprometer regiones temporales y no suele formar múltiples lesiones anulares en ganglios basales."
    },
    "src": "NIH · Toxoplasma gondii Encephalitis, guías de infecciones oportunistas en adultos y adolescentes con VIH",
    "src_url": "https://clinicalinfo.hiv.gov/sites/clinicalinfo/files/guidelines/documents/adult-adolescent-oi/toxoplasma-gondii-encephalitis-adult-adolescent-oi.pdf?v=1795102723"
  },
  {
    "originalId": "febrero-2024:58",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "La pielonefritis durante el embarazo requiere manejo inicial hospitalario. La ceftriaxona EV es una opción empírica en una paciente sin alergia grave ni riesgo identificado de resistencia. Se toma urocultivo y se ajusta según sensibilidad.",
    "o": {
      "A": "La doxiciclina oral no es tratamiento empírico apropiado para pielonefritis gestacional.",
      "B": "La amikacina se reserva para situaciones seleccionadas según sensibilidad y riesgo. No es preferible a una cefalosporina adecuada en este escenario.",
      "D": "La ciprofloxacina no es de primera elección en el embarazo cuando se dispone de un betalactámico activo."
    },
    "src": "Consenso Argentino Intersociedades de Infección Urinaria · Pielonefritis en el embarazo, Medicina (B Aires) 2020",
    "src_url": "https://smiba.org.ar/downloads/cursos2024/infectologia_03.pdf",
    "stem": "Gestante de 14 semanas con pielonefritis aguda de adquisición comunitaria que se interna. Está estable, sin alergias ni antecedentes de microorganismos resistentes. Tras tomar urocultivo, ¿cuál de estos antibióticos es apropiado como tratamiento empírico inicial?"
  },
  {
    "originalId": "febrero-2024:59",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "Una infección ótica con primera convulsión y déficit focal obliga a buscar extensión intracraneal, incluido un absceso. La RM con difusión es preferible. Si no está disponible de inmediato, corresponde TC con contraste urgente y evaluación hospitalaria especializada.",
    "o": {
      "A": "Los corticoides no sustituyen la investigación de la lesión intracraneal. Se reservan para indicaciones concretas como edema grave con efecto de masa.",
      "B": "La convulsión y el déficit focal hacen insegura una derivación ambulatoria.",
      "C": "Agregar vancomicina por presunta resistencia neumocócica sin estudiar la complicación no explica ni resuelve los signos neurológicos."
    },
    "src": "ESCMID · Guidelines on diagnosis and treatment of brain abscess in children and adults, neuroimagen",
    "src_url": "https://doi.org/10.1016/j.cmi.2023.08.016",
    "stem": "Mujer de 65 años con diabetes, fiebre, otalgia y otorrea persistentes. Durante la evaluación presenta una primera convulsión y luego un déficit facial central. Tras estabilizarla se sospecha una complicación intracraneal de la infección ótica. No hay RM disponible de inmediato. ¿Qué conducta diagnóstica tiene prioridad?",
    "options": [
      "Agregar corticoides sin solicitar imágenes.",
      "Derivar a consultorio de otorrinolaringología.",
      "Agregar vancomicina por presunto neumococo resistente como única conducta.",
      "Solicitar TC de encéfalo con contraste de urgencia para buscar un absceso u otra complicación."
    ]
  },
  {
    "originalId": "febrero-2024:60",
    "verifiedOn": "2026-11-27",
    "a": "D",
    "why": "El drenaje de 400 mL/h durante cuatro horas suma 1.600 mL y supera el criterio de sangrado persistente de más de 200 mL/h durante tres horas. Se requiere evaluación quirúrgica inmediata para control de la hemorragia mientras continúa la reanimación.",
    "o": {
      "A": "Un hematocrito aislado puede subestimar la pérdida aguda y no debe demorar el control del sangrado.",
      "B": "Clampear el tubo retiene sangre y aire en el tórax y no controla el vaso lesionado.",
      "C": "La transfusión puede ser necesaria durante la reanimación, pero una unidad aislada no detiene la hemorragia."
    },
    "src": "WSES–AAST · Thoracic trauma guidelines, hemotórax y criterios de intervención, 2025",
    "src_url": "https://link.springer.com/article/10.1186/s13017-025-00651-1",
    "stem": "Adulto con hemoneumotórax traumático y drenaje pleural permeable. Durante cuatro horas consecutivas salen 400 mL/h de sangre por el tubo. Además de continuar la reanimación, ¿qué conducta tiene prioridad?"
  },
  {
    "originalId": "febrero-2024:61",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "El colon derecho tiene luz amplia y contenido más líquido. Sus tumores pueden sangrar de forma oculta durante meses y manifestarse por ferropenia antes de causar obstrucción. Esta asociación no permite localizar un tumor con certeza sin estudiar el colon.",
    "o": {
      "A": "En el colon izquierdo son más característicos el cambio del ritmo evacuatorio y los síntomas obstructivos, aunque también puede haber anemia.",
      "C": "Los tumores transversos también pueden sangrar. La presentación clásica con ferropenia aislada se asocia más al colon derecho.",
      "D": "El cáncer de recto suele dar rectorragia o tenesmo. La ferropenia por pérdida oculta no es su presentación más característica."
    },
    "src": "Manual MSD profesional · Colorectal Cancer, manifestaciones según localización",
    "src_url": "https://www.msdmanuals.com/professional/oncology/tumors-of-the-gastrointestinal-tract/colorectal-cancer?query=colorectal+cancer&ruleredirectid=742autoredirectid%3D37264",
    "stem": "En un adulto mayor con cáncer colorrectal, ¿qué localización se asocia clásicamente con anemia ferropénica por pérdida oculta crónica como primera manifestación, sin síntomas obstructivos?"
  },
  {
    "originalId": "febrero-2024:62",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "El dolor que aumenta al retirar la mano tras la palpación sugiere irritación del peritoneo parietal. En un paciente con dolor agudo en fosa ilíaca derecha justifica evaluación quirúrgica urgente, entre otras causas por posible apendicitis.",
    "o": {
      "A": "Los vómitos pueden acompañar muchas causas de abdomen agudo y por sí solos no demuestran irritación peritoneal.",
      "C": "La leucocitosis es inespecífica y puede faltar incluso en una apendicitis.",
      "D": "La fiebre orienta a inflamación o infección, pero no identifica por sí sola compromiso peritoneal."
    },
    "src": "American Family Physician · Acute Abdominal Pain in Adults: Evaluation and Diagnosis, 2023",
    "src_url": "https://www.aafp.org/afp/2023/0600/acute-abdominal-pain-adults.pdf",
    "stem": "Adulto de 32 años con 12 horas de dolor intenso en fosa ilíaca derecha. ¿Cuál de estos hallazgos es un signo de irritación peritoneal que refuerza la necesidad de evaluación quirúrgica urgente?"
  },
  {
    "originalId": "febrero-2024:63",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "En un embarazo de bajo riesgo sin diabetes diagnosticada previamente, la ventana habitual para la PTOG con 75 g es entre las semanas 24 y 28, cuando aumenta la resistencia a la insulina.",
    "o": {
      "A": "Entre las semanas 18 y 22 todavía no se alcanzó la ventana habitual para esta prueba.",
      "B": "La evaluación glucémica temprana puede detectar diabetes preexistente, pero no reemplaza la PTOG habitual de las semanas 24 a 28.",
      "D": "Si se perdió la oportunidad puede evaluarse más tarde. Las semanas 30 a 36 no son el intervalo programado de primera elección."
    },
    "src": "Ministerio de Salud de la Nación · Protocolo de diagnóstico de diabetes gestacional, PTOG de 75 g",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/bancos/2023-08/Protocolo_de_Diabetes_Gestacional_2023.pdf"
  },
  {
    "originalId": "febrero-2024:64",
    "verifiedOn": "2026-11-27",
    "a": "B",
    "why": "En una puérpera RhD negativa no sensibilizada con recién nacido RhD positivo, la inmunoglobulina anti-D se administra cuanto antes, idealmente dentro de las primeras 72 horas. Si se omitió ese plazo corresponde consultar el protocolo de administración tardía.",
    "o": {
      "A": "Administrarla a las 48 horas es adecuado, pero 48 horas no es el límite de la ventana recomendada.",
      "C": "Puede administrarse en las primeras dos horas. No es necesario considerar perdida la oportunidad al superarlas.",
      "D": "Dar la profilaxis el primer día es apropiado, pero el plazo habitual se extiende más allá de las 24 horas."
    },
    "src": "Ministerio de Salud de la Nación · Control prenatal, prevención de la isoinmunización RhD",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/bancos/2018-10/0000000158cnt-g02.control-prenatal.pdf",
    "stem": "Puérpera RhD negativa sin anticuerpos anti-D inmunes, con recién nacido RhD positivo. ¿Cuál es el límite superior de la ventana habitual recomendada para administrar la profilaxis anti-D posparto sin demora?"
  },
  {
    "originalId": "febrero-2024:65",
    "verifiedOn": "2026-11-27",
    "a": "C",
    "why": "La doble viral contiene virus vivos atenuados de sarampión y rubéola. Está contraindicada durante la gestación. Si corresponde completar el esquema, se indica en el puerperio.",
    "o": {
      "A": "La vacuna antigripal inyectable inactivada está indicada durante el embarazo.",
      "B": "La vacuna inactivada contra hepatitis A puede administrarse si existe indicación por riesgo de exposición.",
      "D": "La vacuna contra hepatitis B es recombinante y el embarazo no contraindica iniciar o completar el esquema."
    },
    "src": "Ministerio de Salud de la Nación · Vacunas recomendadas para la mujer, embarazo y puerperio",
    "src_url": "https://www.argentina.gob.ar/sites/default/files/2023/07/rr_vacunas_recomendadas_para_la_mujer.pdf",
    "stem": "¿Cuál de estas formulaciones está contraindicada durante el embarazo?",
    "options": [
      "Vacuna antigripal inyectable inactivada.",
      "Vacuna inactivada contra hepatitis A.",
      "Vacuna doble viral contra sarampión y rubéola.",
      "Vacuna recombinante contra hepatitis B."
    ]
  },
  {
    "originalId": "febrero-2024:66",
    "verifiedOn": "2026-11-27",
    "a": "A",
    "why": "La exposición rural en el sur santafesino, la fiebre con congestión conjuntival, las adenopatías, la leucopenia, la trombocitopenia y la eritrosedimentación muy baja orientan a fiebre hemorrágica argentina. Corresponde evaluar y notificar la sospecha de inmediato.",
    "o": {
      "B": "La leptospirosis también causa sufusión conjuntival, pero suele asociarse a mialgias intensas y puede comprometer riñón e hígado. El patrón hematológico y la zona orientan más a FHA.",
      "C": "Para fiebre amarilla se buscaría exposición en área de transmisión y compromiso hepático, ausentes en este relato.",
      "D": "El dengue también puede producir ambas citopenias. La actividad rural en la zona endémica de FHA y la eritrosedimentación muy baja obligan a priorizar esa sospecha sin descartar dengue sólo por el hemograma."
    },
    "src": "Ministerio de Salud de Santa Fe · Informe epidemiológico, semana 36 de 2025, fiebre hemorrágica argentina",
    "src_url": "https://www.santafe.gov.ar/index.php/web/content/download/282575/1462528/file/INFORME_EPIDEMIOLOGICO_SE36_2025.pdf"
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
