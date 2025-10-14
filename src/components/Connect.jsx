import Button from "./Button"

const Connect = () => {
  return (
    <div>
      <div className="px-4 py-8 bg-[#141414] border border-neutral-800 flex flex-col gap-y-4 justify-center rounded-xl">
        <div className="text-center font-semibold">Let's Connect</div>
        <div className="flex gap-x-2 justify-center">
          <Button to="mailto:stwnsalmann@gmail.com" target="_blank" rel="noopener noreferrer" text='Gmail' />
          <Button to="https://instagram.com/eisenflux" target="_blank" rel="noopener noreferrer" text='Instagram' />
          <Button to="https://linkedin.com/in/salman-setiawan" target="_blank" rel="noopener noreferrer" text='LinkedIn' />
        </div>
      </div>
    </div>
  )
}

export default Connect