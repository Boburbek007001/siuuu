import React from 'react';
import { Layout } from '@/components/layout';
import { useLanguage } from '@/lib/i18n';
import { articles, topics } from '@/lib/data';
import { medicalDictionary, generateArticleContent } from '@/lib/medical-dictionary';
import { useRoute, Link } from 'wouter';
import { ArrowLeft, Calendar, Tag, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ArticlePage() {
  const [match, params] = useRoute("/article/:id");
  const { t, language } = useLanguage();

  if (!match) return <div>Not found</div>;

  let article = articles.find(a => a.id === params.id);

  // If not found in static articles, try to generate it from the dictionary
  if (!article) {
    const dictionaryEntry = medicalDictionary.find(d => d.id === params.id);
    if (dictionaryEntry) {
      article = generateArticleContent(dictionaryEntry);
    }
  }

  if (!article) return (
    <Layout>
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Maqola topilmadi</h1>
        <Link href="/">
          <Button className="mt-4">Bosh sahifaga qaytish</Button>
        </Link>
      </div>
    </Layout>
  );

  const category = topics.find(t => t.id === article.category);

  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="pl-0 hover:pl-2 transition-all gap-2 text-muted-foreground mb-6">
              <ArrowLeft className="h-4 w-4" /> Ortga
            </Button>
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium flex items-center gap-2">
              <Tag className="h-3 w-3" />
              {category?.title[language]}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-3 w-3" />
              {article.date}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground leading-tight mb-6">
            {article.title[language]}
          </h1>

          {article.image && (
            <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
              <img 
                src={article.image} 
                alt={article.title[language]} 
                className="w-full h-[400px] object-cover"
              />
            </div>
          )}

          <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-primary pl-6 italic mb-8">
            {article.summary[language]}
          </p>
        </div>

        <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground">
          <div dangerouslySetInnerHTML={{ __html: article.content[language] }} />
        </div>

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-bold font-serif mb-6">{t.relatedTopics}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {articles
               .filter(a => a.category === article.category && a.id !== article.id)
               .map(related => (
                 <Link key={related.id} href={`/article/${related.id}`}>
                    <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <h4 className="font-bold mb-2">{related.title[language]}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">{related.summary[language]}</p>
                    </div>
                 </Link>
               ))
             }
          </div>
        </div>
      </article>
    </Layout>
  );
}
