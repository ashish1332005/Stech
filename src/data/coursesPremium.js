const raw=[
['bsc-nursing','B.Sc. Nursing','Nursing','4 years','Undergraduate','STech College of Nursing'],
['gnm','General Nursing & Midwifery (GNM)','Nursing','Confirm with admissions','Diploma','STech College of Nursing'],
['anm','Auxiliary Nursing & Midwifery (ANM)','Nursing','Confirm with admissions','Diploma','STech College of Nursing'],
['post-basic-nursing','Post Basic B.Sc. Nursing','Nursing','Confirm with admissions','Undergraduate','STech College of Nursing'],
['msc-nursing','M.Sc. Nursing','Nursing','Confirm with admissions','Postgraduate','STech College of Nursing'],
['bpharm','Bachelor of Pharmacy (B.Pharm)','Pharmacy','4 years','Undergraduate','STech College of Pharmacy'],
['dpharm','Diploma in Pharmacy (D.Pharm)','Pharmacy','Confirm with admissions','Diploma','STech College of Pharmacy'],
['mpharm','Master of Pharmacy (M.Pharm)','Pharmacy','Confirm with admissions','Postgraduate','STech College of Pharmacy'],
['bams','Bachelor of Ayurvedic Medicine & Surgery (BAMS)','Ayurveda','Confirm with admissions','Undergraduate','STech Ayurved College'],
['dmlt','Diploma in Medical Laboratory Technology (DMLT)','Paramedical','Confirm with admissions','Diploma','STech Institute of Paramedical Sciences'],
['bmlt','B.Sc. Medical Laboratory Technology','Paramedical','Confirm with admissions','Undergraduate','STech Institute of Paramedical Sciences'],
['ott','Operation Theatre Technology','Paramedical','Confirm with admissions','Diploma','STech Institute of Paramedical Sciences'],
['radiology','Radiology & Imaging Technology','Paramedical','Confirm with admissions','Diploma','STech Institute of Paramedical Sciences'],
['emergency-care','Emergency & Trauma Care','Certificate Courses','Confirm with admissions','Certificate','STech Institute of Paramedical Sciences'],
['school-primary','Primary School Programme','School','Academic session','School','STech School'],
['school-middle','Middle School Programme','School','Academic session','School','STech School'],
['school-secondary','Secondary School Programme','School','Academic session','School','STech School'],
['nda-training','NDA Foundation & Defence Preparation','NDA Training','Confirm with admissions','Training Programme','STech NDA Training Academy']
];
export const courses=raw.map(([slug,name,category,duration,level,institution])=>{
 const isNda=category==='NDA Training';
 return {slug,name,category,duration,level,institution,mode:'On campus',eligibility:isNda?'Current age, education and entrance requirements must be confirmed with the admissions team':'Eligibility criteria to be verified and updated by the admissions office',overview:isNda?'A structured NDA preparation programme combining academic guidance, physical conditioning, communication skills and disciplined daily practice. Current eligibility, batch schedule and examination requirements should be confirmed with the admissions team.':`${name} is presented as part of STech Group's academic portfolio. Verified curriculum, eligibility, intake, approvals and fee information will be published after institutional confirmation.`,outcomes:isNda?['Strengthen NDA entrance examination fundamentals','Build stamina through supervised physical conditioning','Improve communication, confidence and leadership habits','Develop disciplined study and time-management routines']:['Build strong subject knowledge','Develop practical and professional skills','Learn through guided academic experiences','Prepare for further study and relevant career pathways'],curriculum:isNda?['Mathematics and General Ability Test preparation','English, current affairs and communication practice','Physical fitness and obstacle-course conditioning','Mock tests, interview orientation and progress reviews']:['Foundation and core subjects','Practical and laboratory learning','Field or clinical exposure','Assessment and project work']};
});
export const courseGroups=['Nursing','Pharmacy','Paramedical','Ayurveda','School','NDA Training','Certificate Courses'].map(category=>({category,courses:courses.filter(x=>x.category===category)}));


