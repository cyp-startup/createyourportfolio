const ClientsCard = ({ desc, client_name, client_photo, rotate_number } : { desc: string, client_name: string, client_photo: string, rotate_number: number }) => {

  return (
    <div className={`border-[3px] border-black p-[20px] min-[542px]:p-[32px] bg-[#fafafa] w-full navbar ${rotate_number === 1 ? "rotate-[-3deg]" : "rotate-[3deg]"}`}>
      <p className='text-[15px] min-[422px]:text-[18px] min-[542px]:text-[24px] font-medium mb-[12px]'>{desc}</p>
      <div className='flex items-center gap-[16px]'>
        <img height={80} width={80} alt='client photo' src={client_photo} className='rounded-full w-[46px] min-[542px]:w-[80px] h-[46px] min-[542px]:h-[80px] object-cover' />
        <div>
          <p className='text-[18px] min-[542px]:text-[24px] font-bold text-[#2b2b2b]'>Client Name</p>
          <span className='text-[15px] min-[542px]:text-[20px] font-medium text-[#545454]'>{client_name}</span>
        </div>
      </div>
    </div>
  )
}

export default ClientsCard