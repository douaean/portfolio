import {internships} from './internships.js';
export default function Internships(){return <section id="internships" className="section internships-section">
  <div className="section-heading"><div><div className="eyebrow muted">02 / INTERNSHIPS & APPLIED SKILLS</div><h2>Real teams.<br/><span className="serif">Real engineering experience.</span></h2></div><p>The projects, contributions, and skills<br/>behind my internships.</p></div>
  <div className="internship-jump" aria-label="Internship companies">{internships.map(item=><a href={`#internship-${item.company.toLowerCase()}`} key={item.company}>{item.company}<span>{item.role}</span></a>)}</div>
  <div className="internship-list">{internships.map((item,index)=><article className="internship-card" id={`internship-${item.company.toLowerCase()}`} key={item.company}>
    <div className="internship-company"><span className="internship-number">INTERNSHIP / 0{index+1}</span><h3>{item.company}</h3><p className="internship-role">{item.role}</p><p className="internship-date">{item.dates}<br/>Casablanca, Morocco</p></div>
    <div className="internship-detail"><h3>{item.title}</h3><p className="internship-summary">{item.summary}</p><h4>My contributions</h4><ul>{item.contributions.map(text=><li key={text}>{text}</li>)}</ul><div className="internship-outcomes">{item.outcomes.map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><h4>Skills applied</h4><div className="tags flex flex-wrap">{item.skills.map(skill=><span key={skill}>{skill}</span>)}</div></div>
  </article>)}</div>
</section>}
