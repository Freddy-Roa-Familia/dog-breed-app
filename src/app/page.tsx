import Dog from './dog/page';

export default function Home() {
  return (
    <>
      <div className='grid grid-cols-2 gap-4'>
        <div><Dog image='breeds/germanshepherd.png' breed='German Shepherd' /></div>
        <div><Dog image='breeds/frenchbulldog.png' breed='French Bulldog' /></div>
        <div><Dog image='breeds/canecorso.png' breed='Cane Corso' /></div>
        <div><Dog image='breeds/goldenretriever.png' breed='Golden Retriever' /></div>
      </div>
    </>
  )
}
