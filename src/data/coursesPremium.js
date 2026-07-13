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
['school-secondary','Secondary School Programme','School','Academic session','School','STech School']
];
export const courses=raw.map(([slug,name,category,duration,level,institution])=>({slug,name,category,duration,level,institution,mode:'On campus',eligibility:'Eligibility criteria to be verified and updated by the admissions office',overview:`${name} is presented as part of STech Group's academic portfolio. Verified curriculum, eligibility, intake, approvals and fee information will be published after institutional confirmation.`,outcomes:['Build strong subject knowledge','Develop practical and professional skills','Learn through guided academic experiences','Prepare for further study and relevant career pathways'],curriculum:['Foundation and core subjects','Practical and laboratory learning','Field or clinical exposure','Assessment and project work'] }));
export const courseGroups=['Nursing','Pharmacy','Paramedical','Ayurveda','School','Certificate Courses'].map(category=>({category,courses:courses.filter(x=>x.category===category)}));


