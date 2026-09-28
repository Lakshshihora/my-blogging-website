const posts=[
{title:"How I Started Learning Artificial Intelligence",date:"September 5, 2026",text:"My journey into artificial intelligence and the lessons I learned along the way.",tag:"Education"},
{title:"5 Technologies Every Student Should Learn",date:"August 28, 2026",text:"A practical guide to technologies that can help students build a strong technical foundation.",tag:"Tech"},
{title:"Building My First Real Project",date:"August 15, 2026",text:"What I learned while turning an idea into a working project.",tag:"Career"},
{title:"Why Continuous Learning Matters",date:"August 5, 2026",text:"Why staying curious and continuously improving can change your career and life.",tag:"Personal"},
{title:"Understanding Machine Learning",date:"July 20, 2026",text:"A beginner-friendly explanation of machine learning and how it works.",tag:"Tech"},
{title:"How I Manage My Study Time",date:"July 10, 2026",text:"Some simple strategies I use to stay organized and productive.",tag:"Education"}
];
const postsBox=document.querySelector("#posts");
function render(q=""){
  const filtered=posts.filter(p=>(p.title+p.text+p.tag).toLowerCase().includes(q.toLowerCase()));
  postsBox.innerHTML=filtered.map((p,i)=>`
    <article class="blog-card" onclick="openBlog(${posts.indexOf(p)})" tabindex="0">
      <b>${p.tag}</b><small>${p.date}</small>
      <h3>${p.title}</h3><p>${p.text}</p>
      <a class="read" href="#" onclick="event.preventDefault();event.stopPropagation();openBlog(${posts.indexOf(p)})">Read Article →</a>
    </article>`).join("")||"<p>No articles found.</p>";
}
function openBlog(index){
  const p=posts[index];
  document.querySelector("#blogModal").classList.add("show");
  document.querySelector("#modalTag").textContent=p.tag;
  document.querySelector("#modalDate").textContent=p.date;
  document.querySelector("#modalTitle").textContent=p.title;
  document.querySelector("#modalText").textContent=p.text;
  document.querySelector("#modalBody").textContent=
    "This blog shares practical ideas, lessons and personal experience around technology, learning and career growth. "+
    "The goal is to make the topic simple, useful and easy to apply. "+
    "More detailed sections, examples and personal notes can be added here as the article grows.";
  document.body.classList.add("modal-open");
}
function closeBlog(){
  document.querySelector("#blogModal").classList.remove("show");
  document.body.classList.remove("modal-open");
}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeBlog()});
render();document.querySelector("#search").addEventListener("input",e=>render(e.target.value));
document.querySelector("#menu").onclick=()=>document.querySelector("nav").classList.toggle("open");
document.querySelectorAll("nav a").forEach(a=>a.onclick=()=>document.querySelector("nav").classList.remove("open"));
document.querySelector("#contactForm").onsubmit=e=>{e.preventDefault();alert("Thanks for your message!");e.target.reset()};
