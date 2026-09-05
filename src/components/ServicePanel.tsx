import type { Service } from '../data/services'

type Props = {
  active: Service
}

export function ServicePanel({ active }: Props) {
  return (
    <section className="panel" aria-labelledby="panel-title">
      <header className="panel__header">
        <p className="panel__eyebrow">Выбранная система</p>
        <div className="panel__title-row">
          <h1 id="panel-title" className="panel__title">
            {active.title}
          </h1>
          <a
            className="panel__open panel__open--header"
            href={active.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Открыть в новой вкладке
          </a>
        </div>
        <p className="panel__desc panel__desc--header">{active.description}</p>
        <p className="panel__url">
          <a href={active.url} target="_blank" rel="noopener noreferrer">
            {active.url}
          </a>
        </p>
      </header>

      <div className="panel__body">
        {active.embeddable ? (
          <iframe
            key={active.id}
            className="panel__frame"
            title={active.title}
            src={active.url}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="panel__fallback">
            <p className="panel__hint">
              Система не встраивается в хаб (ограничение браузера/сервиса).
              Используйте кнопку «Открыть в новой вкладке».
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
