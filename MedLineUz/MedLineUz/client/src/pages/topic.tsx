import React from 'react';
import { Layout } from '@/components/layout';
import { useLanguage } from '@/lib/i18n';
import { articles, topics } from '@/lib/data';
import { useRoute, Link } from 'wouter';
import { ArrowRight, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function TopicPage() {
  const [match, params] = useRoute("/topic/:id");
  const { t, language } = useLanguage();

  if (!match) return <div>Not found</div>;

  const topic = topics.find(t => t.id === params.id);
  const topicArticles = articles.filter(a => a.category === params.id);

  if (!topic) return (
    <Layout>
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Mavzu topilmadi</h1>
        <Link href="/">
          <Button className="mt-4">Bosh sahifaga qaytish</Button>
        </Link>
      </div>
    </Layout>
  );

  return (
    <Layout>
      <div className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-serif mb-4">{topic.title[language]}</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Asosiy</Link>
            <span>/</span>
            <span>{topic.title[language]}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {topicArticles.length > 0 ? (
              topicArticles.map(article => (
                <Link key={article.id} href={`/article/${article.id}`}>
                  <Card className="cursor-pointer hover:shadow-md transition-all">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold font-serif mb-3 group-hover:text-primary transition-colors">
                        {article.title[language]}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {article.summary[language]}
                      </p>
                      <div className="flex items-center text-primary font-medium text-sm">
                        {t.readMore} <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="text-center py-12 text-muted-foreground border rounded-lg border-dashed">
                Ushbu mavzu bo'yicha maqolalar topilmadi.
              </div>
            )}
          </div>

          <aside className="space-y-8">
            <div className="bg-card border rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">{t.relatedTopics}</h3>
              <ul className="space-y-3">
                {topics.filter(t => t.id !== topic.id).slice(0, 5).map(rel => (
                  <li key={rel.id}>
                    <Link href={`/topic/${rel.id}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                       <Activity className="h-4 w-4" />
                       {rel.title[language]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
