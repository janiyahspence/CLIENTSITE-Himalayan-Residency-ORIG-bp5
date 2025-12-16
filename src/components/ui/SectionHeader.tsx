interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({ subtitle, title, description, centered = true, light = false }: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-12`}>
      <span className={`section-subtitle ${light ? 'text-secondary-400' : ''}`}>
        {subtitle}
      </span>
      <h2 className={`section-title ${light ? 'text-white' : ''}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg ${light ? 'text-neutral-300' : 'text-neutral-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
