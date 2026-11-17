export default function Home(){
  return(
    <div className="grid min-h-screen grid-cols-[240px_minmax(0,1fr)] grid-rows-[72px_minmax(0,1fr)] bg-white">
      <div className="border-r border-zinc-200"/>
      <header className="border-b border-zinc-200"/>
      <aside className="border-r border-zinc-200"/>
      <main/>
    </div>
  );
}
