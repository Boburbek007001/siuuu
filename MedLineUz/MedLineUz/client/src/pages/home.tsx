import React, { useState } from 'react';
import { Layout } from '@/components/layout';
import { useLanguage } from '@/lib/i18n';
import { topics, articles } from '@/lib/data';
import { medicalDictionary, Disease } from '@/lib/medical-dictionary';
import { Link, useLocation } from 'wouter';
import { Search, ArrowRight, Activity, Heart, Brain, Pill, Stethoscope, Dna, Smile, Baby, Sun, Apple, Wind, ChevronDown, ChevronUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import heroBg from '@assets/generated_images/serene_nature-inspired_medical_abstract_with_sage_green_and_soft_light..png';
import { motion, AnimatePresence } from 'framer-motion';

const IconMap: Record<string, any> = {
  Heart: Heart,
  Activity: Activity,
  Wind: Wind,
  Brain: Brain,
  Sun: Sun,
  Apple: Apple,
  Smile: Smile,
  Baby: Baby,
};

export default function Home() {
  const { t, language } = useLanguage();
  const [location, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [showAllDiseases, setShowAllDiseases] = useState(false);
  const [displayCount, setDisplayCount] = useState(50);

  const filteredDiseases = medicalDictionary.filter(d => 
    d.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-background py-24 lg:py-40">
        <div className="absolute inset-0 z-0 opacity-30">
            <img src={heroBg} alt="Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              O'zbekistondagi #1 Tibbiy Ensiklopediya
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground font-serif mb-6 leading-tight">
              {t.heroTitle}
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground mb-12 font-light">
              {t.heroSubtitle}
            </p>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="mx-auto max-w-2xl"
          >
            <form onSubmit={handleSearch} className="relative flex items-center shadow-2xl shadow-primary/10 rounded-full bg-card border border-white/20 hover:shadow-3xl transition-shadow">
              <Search className="absolute left-6 h-6 w-6 text-primary/60" />
              <Input 
                type="search" 
                placeholder={t.searchPlaceholder}
                className="h-16 w-full rounded-full bg-transparent pl-16 pr-32 text-lg focus-visible:ring-0 border-none placeholder:text-muted-foreground/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" className="absolute right-2 top-2 bottom-2 rounded-full px-8 font-medium text-base shadow-none hover:bg-primary/90">
                {t.searchButton}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Features/Topics Grid */}
      <section className="py-20 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent h-20" />
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground">{t.featuredTopics}</h2>
            <Button variant="link" className="text-primary font-medium text-lg">{t.readMore} <ArrowRight className="ml-2 h-5 w-5" /></Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
            {topics.map((topic, idx) => {
              const Icon = IconMap[topic.icon] || Activity;
              return (
                <Link key={topic.id} href={`/topic/${topic.id}`}>
                  <motion.div 
                    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                    className="group cursor-pointer bg-card hover:bg-primary hover:text-primary-foreground p-6 rounded-2xl border border-border/50 shadow-sm transition-all flex flex-col items-center text-center gap-4 h-full justify-center min-h-[160px]"
                  >
                    <div className="p-4 bg-primary/5 rounded-full group-hover:bg-white/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-medium text-sm md:text-base leading-tight">
                      {topic.title[language]}
                    </span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Massive Disease Database Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Tibbiy Ensiklopediya (A-Z)</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              750 dan ortiq kasalliklar, sindromlar va tibbiy holatlar bo'yicha to'liq ma'lumotlar bazasi.
            </p>
          </div>

          <div className="bg-card rounded-3xl border shadow-sm overflow-hidden">
             <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
               {filteredDiseases.slice(0, showAllDiseases ? undefined : displayCount).map((disease) => (
                 <Link key={disease.id} href={`/article/${disease.id}`}>
                   <div className="flex items-center justify-between py-3 border-b border-border/50 hover:bg-muted/30 px-4 rounded-lg transition-colors group cursor-pointer">
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">{disease.name}</span>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">{disease.category}</span>
                   </div>
                 </Link>
               ))}
             </div>
             <div className="p-6 bg-muted/20 border-t text-center">
               {!showAllDiseases && filteredDiseases.length > displayCount && (
                 <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => setShowAllDiseases(true)}
                  className="gap-2"
                >
                   Ko'proq Ko'rsatish ({filteredDiseases.length - displayCount}+) <ChevronDown className="h-4 w-4" />
                 </Button>
               )}
               {showAllDiseases && (
                  <Button 
                  variant="ghost" 
                  onClick={() => setShowAllDiseases(false)}
                  className="gap-2"
                >
                   Yopish <ChevronUp className="h-4 w-4" />
                 </Button>
               )}
             </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-bold font-serif mb-12">{t.latestNews}</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             {articles.slice(0, 4).map((article) => (
               <Link key={article.id} href={`/article/${article.id}`}>
                 <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 border-none shadow-sm overflow-hidden group bg-card h-full">
                   <CardContent className="p-0 flex flex-col h-full">
                     <div className="w-full h-64 relative overflow-hidden">
                       <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors z-10" />
                       {/* Article Image */}
                       {article.image ? (
                         <img 
                          src={article.image} 
                          alt={article.title[language]} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                       ) : (
                         <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-muted">
                           <Activity className="h-12 w-12 opacity-20" />
                         </div>
                       )}
                     </div>
                     <div className="p-8 flex flex-col flex-grow">
                       <div className="mb-4">
                         <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                           {topics.find(t => t.id === article.category)?.title[language]}
                         </span>
                       </div>
                       <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors font-serif leading-tight">
                         {article.title[language]}
                       </h3>
                       <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                         {article.summary[language]}
                       </p>
                       <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between text-sm text-muted-foreground">
                         <span className="flex items-center gap-2"><Activity className="h-4 w-4" /> {article.date}</span>
                         <span className="flex items-center text-primary font-bold group-hover:translate-x-1 transition-transform">
                           {t.readMore} <ArrowRight className="ml-1 h-4 w-4" />
                         </span>
                       </div>
                     </div>
                   </CardContent>
                 </Card>
               </Link>
             ))}
           </div>
        </div>
      </section>

      {/* Features/Tools Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Foydali Tibbiy Vositalar</h2>
             <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">Sizning salomatligingizni nazorat qilish uchun maxsus vositalar.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/10 shadow-none text-primary-foreground backdrop-blur-sm hover:bg-white/20 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Pill className="h-8 w-8" />
                  {t.drugsSupplements}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                  Reseptli va reseptsiz dorilar, o'tlar va qo'shimchalar haqida to'liq ma'lumot oling.
                </p>
                <Button variant="secondary" className="w-full font-bold">Dorilar Ro'yxati</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/10 shadow-none text-primary-foreground backdrop-blur-sm hover:bg-white/20 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Dna className="h-8 w-8" />
                  {t.genetics}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                  Genetik kasalliklar va irsiy omillarning salomatligingizga ta'siri haqida o'rganing.
                </p>
                <Button variant="secondary" className="w-full font-bold">Genetika Bo'limi</Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/10 shadow-none text-primary-foreground backdrop-blur-sm hover:bg-white/20 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Stethoscope className="h-8 w-8" />
                  {t.medicalTests}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                  Tibbiy tahlillar nima ekanligini, nima uchun o'tkazilishini va natijalar nimani anglatishini bilib oling.
                </p>
                <Button variant="secondary" className="w-full font-bold">Tahlillar Haqida</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
