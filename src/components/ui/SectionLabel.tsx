import styles from './SectionLabel.module.css'

interface SectionLabelProps {
  children: React.ReactNode
  light?: boolean
}

export function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <div className={`${styles.label} ${light ? styles.light : ''}`}>{children}</div>
  )
}
