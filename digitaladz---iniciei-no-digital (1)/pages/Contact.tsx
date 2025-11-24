import React from "react";
import { Mail, Twitter, Instagram, MessageCircle, Lightbulb, HelpCircle, Heart, Youtube } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-12 bg-slate-950 fade-text">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-accent rounded-xl mb-6 shadow-lg shadow-accent/20">
            <MessageCircle className="w-8 h-8 text-slate-900" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contact_title')} <span className="text-accent">{t('nav_contact')}</span>
          </h1>
          <p className="text-slate-400 text-lg">
            {t('contact_subtitle')}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          
          {/* Email */}
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-center group hover:border-slate-700 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 mx-auto bg-green-900/30 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-accent font-mono text-sm mb-4 break-all">igor.vilarim@gmail.com</p>
            <p className="text-slate-500 text-xs">{t('contact_email_desc')}</p>
          </div>

          {/* Twitter */}
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-center group hover:border-slate-700 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 mx-auto bg-green-900/30 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
              <Twitter className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Twitter / X</h3>
            <p className="text-accent font-mono text-sm mb-4">@igor_vilarim</p>
            <p className="text-slate-500 text-xs">{t('contact_social_desc')}</p>
          </div>

          {/* Instagram */}
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-center group hover:border-slate-700 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 mx-auto bg-green-900/30 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Instagram</h3>
            <p className="text-accent font-mono text-sm mb-4">@inicieinodigital</p>
            <p className="text-slate-500 text-xs">{t('contact_social_desc')}</p>
          </div>

          {/* YouTube */}
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-center group hover:border-slate-700 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 mx-auto bg-green-900/30 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
              <Youtube className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">YouTube</h3>
            <p className="text-accent font-mono text-sm mb-4">@inicieinodigital</p>
            <p className="text-slate-500 text-xs">{t('contact_social_desc')}</p>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 md:p-12 mb-16">
          <div className="flex items-center gap-3 mb-8">
             <h2 className="text-2xl font-bold text-white">{t('how_help')} <span className="text-accent">Help?</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
               <div className="flex items-center gap-2 text-accent font-bold text-sm">
                 <Lightbulb className="w-4 h-4" /> {t('help_1_title')}
               </div>
               <p className="text-slate-400 text-sm leading-relaxed">
                 {t('help_1_desc')}
               </p>
            </div>

            <div className="space-y-2">
               <div className="flex items-center gap-2 text-yellow-500 font-bold text-sm">
                 <Heart className="w-4 h-4" /> {t('help_2_title')}
               </div>
               <p className="text-slate-400 text-sm leading-relaxed">
                 {t('help_2_desc')}
               </p>
            </div>
          </div>
        </div>

        {/* Social CTA */}
        <div className="bg-gradient-to-b from-green-900/20 to-slate-900 rounded-2xl border border-green-900/30 p-12 text-center">
           <h2 className="text-2xl font-bold text-white mb-2">{t('contact_social_desc')}</h2>
           <div className="flex justify-center gap-4 mt-8">
              <a href="https://twitter.com/igor_vilarim" target="_blank" rel="noreferrer" className="p-3 bg-green-900/30 text-accent rounded-full hover:bg-accent hover:text-slate-900 transition-all">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/inicieinodigital" target="_blank" rel="noreferrer" className="p-3 bg-green-900/30 text-accent rounded-full hover:bg-accent hover:text-slate-900 transition-all">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="mailto:igor.vilarim@gmail.com" className="p-3 bg-green-900/30 text-accent rounded-full hover:bg-accent hover:text-slate-900 transition-all">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://youtube.com/@inicieinodigital" target="_blank" rel="noreferrer" className="p-3 bg-green-900/30 text-accent rounded-full hover:bg-accent hover:text-slate-900 transition-all">
                <Youtube className="w-6 h-6" />
              </a>
           </div>
        </div>

      </div>
    </div>
  );
}