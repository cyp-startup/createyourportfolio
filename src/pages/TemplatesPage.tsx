import TemplateCard from "@/components/TemplateCard"
import { portfolios } from "@/portfolios/portfolios"
import { useState } from "react"

const TemplatesPage = () => {
  const [templateType, setTemplateType] = useState('all')
  const [search, setSearch] = useState('')

  const filteredTemplates = portfolios.filter(template => {
    const matchesType =
      templateType === 'all' || template.type === templateType
  
    const matchesSearch =
      template.title.toLowerCase().includes(search.toLowerCase()) ||
      template.description.toLowerCase().includes(search.toLowerCase())
  
    return matchesType && matchesSearch
  })

  const groupedTemplates = {
    free: filteredTemplates.filter(t => t.type === 'free'),
    pro: filteredTemplates.filter(t => t.type === 'pro'),
    vip: filteredTemplates.filter(t => t.type === 'vip'),
  }

  const [style, setStyle] = useState('brutalism')

  const styles = [
    { value: 'brutalism', title: 'Brutalism' },
    { value: 'minimal', title: 'Minimal' },
    { value: 'modern', title: 'Modern' },
    { value: 'glassmorphism', title: 'Glassmorphism' },
  ]

  return (
    <div className="min-h-[calc(100vh_-_67px)] bg-[#fbf8f5] pb-[32px]">
      <section className="w-[90%] mx-auto pt-[120px] relative">
        <h2 className="text-[3rem] font-medium font-google-sans-flex mb-[24px]">Templates</h2>
        
        <div className="flex lg:flex-row flex-col items-start lg:gap-0 gap-[16px] lg:items-center justify-between mb-[16px]">
          <div className="w-full sm:w-[460px] xl:min-w-[550px] grid grid-cols-4 p-[4px] rounded-[16px] bg-[#f1f1f1]/70 backdrop-blur-xl border-[0.5px] border-[#e6e6e6]">
            <button 
              onClick={() => setTemplateType('all')}
              className={`py-[10px] transition-colors duration-150 ${templateType === 'all' ? 'bg-white shadow-[0_3px_1px_rgba(0,0,0,0.04),0_3px_8px_rgba(0,0,0,0.12)] ' : ''} rounded-[12px]`}
            >
              <p className="text-[0.875rem] sm:text-[0.938rem] font-semibold font-roboto-flex text-center leading-[100%]">All</p>
            </button>
            <button 
              onClick={() => setTemplateType('free')}
              className={`py-[10px] transition-colors duration-150 ${templateType === 'free' ? 'bg-white shadow-[0_3px_1px_rgba(0,0,0,0.04),0_3px_8px_rgba(0,0,0,0.12)] ' : ''} rounded-[12px]`}
            >
              <p className="text-[0.875rem] sm:text-[0.938rem] font-semibold font-roboto-flex text-center leading-[100%]">Free</p>
            </button>
            <button 
              onClick={() => setTemplateType('pro')}
              className={`py-[10px] transition-colors duration-150 ${templateType === 'pro' ? 'bg-white shadow-[0_3px_1px_rgba(0,0,0,0.04),0_3px_8px_rgba(0,0,0,0.12)] ' : ''} rounded-[12px]`}
            >
              <p className="text-[0.875rem] sm:text-[0.938rem] font-semibold font-roboto-flex text-center leading-[100%]">Pro</p>
            </button>
            <button 
              onClick={() => setTemplateType('vip')}
              className={`py-[10px] transition-colors duration-150 ${templateType === 'vip' ? 'bg-white shadow-[0_3px_1px_rgba(0,0,0,0.04),0_3px_8px_rgba(0,0,0,0.12)] ' : ''} rounded-[12px]`}
            >
              <p className="text-[0.875rem] sm:text-[0.938rem] font-semibold font-roboto-flex text-center leading-[100%]">VIP</p>
            </button>
          </div>

          {/* Search input */}
          <div className="bg-white lg:ml-0 ml-auto rounded-[24px] border-[0.5px] border-[#e6e6e6] flex items-center gap-[4px] w-full sm:w-[360px]">
            <input 
              name="search-input" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              id="search-input" 
              className="px-[18px] leading-[100%] pt-[9px] pb-[10px] text-[1rem] text-primary font-outfit grow" 
              placeholder="Search template.." 
              type="text" 
            />
            
            <label htmlFor="search-input" className="pr-[14px]">
              <svg className="w-[22px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -0.5 25 25"><g stroke="#09090b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M5.5 10.765a5.765 5.765 0 1 1 11.53 0 5.765 5.765 0 0 1-11.53 0Z" clip-rule="evenodd"/><path d="M17.029 16.53 19.5 19"/></g></svg>
            </label>
          </div>

        </div>

        <div className="flex items-center gap-[12px] mb-[42px]">
          {/* <CustomSelect 
            value={style}
            onChange={setStyle}
            items={styles}
          /> */}
        </div>

        <div
          className="space-y-[55px]"
        >
          {templateType === 'all' ? (
              <>
                {/* FREE */}
                {groupedTemplates.free.length > 0 && (
                  <div>
                    <h3 className="mb-[16px] text-[1.5rem] font-semibold font-google-sans-flex uppercase">
                      Free
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px] lg:gap-[32px]">
                      {groupedTemplates.free.map(template => (
                        <TemplateCard
                          className="!w-full"
                          type={template.type}
                          key={template.title}
                          title={template.title}
                          price={template.price}
                          description={template.description}
                          views={template.views}
                          created={template.created}
                          img={template.img}
                          link={template.link}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* PRO */}
                {groupedTemplates.pro.length > 0 && (
                  <div>
                    <h3 className="mb-[16px] text-[1.5rem] font-semibold font-google-sans-flex uppercase">
                      Pro
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px] lg:gap-[32px]">
                      {groupedTemplates.pro.map(template => (
                        <TemplateCard
                          className="!w-full"
                          type={template.type}
                          key={template.title}
                          title={template.title}
                          price={template.price}
                          description={template.description}
                          views={template.views}
                          created={template.created}
                          img={template.img}
                          link={template.link}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* VIP */}
                {groupedTemplates.vip.length > 0 && (
                  <div>
                    <h3 className="mb-[16px] text-[1.5rem] font-semibold font-google-sans-flex uppercase">
                      VIP
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px] lg:gap-[32px]">
                      {groupedTemplates.vip.map(template => (
                        <TemplateCard
                          className="!w-full"
                          type={template.type}
                          key={template.title}
                          title={template.title}
                          price={template.price}
                          description={template.description}
                          views={template.views}
                          created={template.created}
                          img={template.img}
                          link={template.link}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px] lg:gap-[32px]">
                {filteredTemplates.map(template => (
                  <TemplateCard
                    className="!w-full"
                    type={template.type}
                    key={template.title}
                    title={template.title}
                    price={template.price}
                    description={template.description}
                    views={template.views}
                    created={template.created}
                    img={template.img}
                    link={template.link}
                  />
                ))}
              </div>
            )}
        </div>
      </section>
    </div>
  )
}

export default TemplatesPage