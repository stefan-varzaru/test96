
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Homepage');

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('hero_title')}</h1>
        <p className="text-lg md:text-xl mb-8">{t('hero_subtitle')}</p>
        <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
          {t('cta_button')}
        </button>
      </section>

      {/* Services Overview */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-8">{t('services_title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{t('service_pm_title')}</h3>
            <p>{t('service_pm_desc')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{t('service_bc_title')}</h3>
            <p>{t('service_bc_desc')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{t('service_rm_title')}</h3>
            <p>{t('service_rm_desc')}</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12 rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-8">{t('testimonials_title')}</h2>
        <div className="grid md:grid-cols-3 gap-8 px-4">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <p className="italic mb-4">"{t('testimonial_1_text')}"</p>
            <p className="font-semibold">- {t('testimonial_1_author')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <p className="italic mb-4">"{t('testimonial_2_text')}"</p>
            <p className="font-semibold">- {t('testimonial_2_author')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <p className="italic mb-4">"{t('testimonial_3_text')}"</p>
            <p className="font-semibold">- {t('testimonial_3_author')}</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-semibold mb-4">{t('contact_title')}</h2>
        <p className="text-lg mb-6">{t('contact_text')}</p>
        {/* Assuming Contact button links to a contact page/section */}
        {/* <Link href="/contact" className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
          {t('contact_button')}
        </Link> */}
         <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
          {t('contact_button')}
        </button>
      </section>
    </div>
  );
}

