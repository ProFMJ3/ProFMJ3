#!/bin/bash
# SCRIPT DE CORRECTIONS FINALES — Toutes pages

echo "🔧 Application des corrections finales..."

cd pages

# 1. FOOTER PARTOUT : Spécialiste IoT → Full-Stack Backend
for file in *.html; do
  sed -i 's/Spécialiste IoT/Full-Stack Backend | Agritech · Fintech/g' "$file"
  sed -i 's/spécialiste IoT/développeur Full-Stack Backend/g' "$file"
done
echo "✅ 1. Footer texte corrigé sur toutes les pages"

# 2. COMPÉTENCES : Raspberry Pi → IpNet
sed -i 's/École.*Raspberry Pi/IpNet Institute of Technology/gi' skills_expertise_technical_competency_matrix.html
sed -i 's/Site officiel Raspberry Pi/IpNet Institute of Technology/gi' skills_expertise_technical_competency_matrix.html
echo "✅ 2. Skills footer Raspberry → IpNet"

# 3. EXPERIENCE : Actuel → Diplômé
sed -i 's/class=".*">Actuel</span>/class="bg-success text-white px-3 py-1 rounded-full text-sm font-medium">Diplômé — Juin 2025</span>/g' experience_academic_professional_timeline.html
echo "✅ 3. Expérience statut IpNet corrigé"

# 4. À PROPOS : 3ème → Licence stats
sed -i 's/<div class="text-2xl font-bold text-primary">3ème</<div class="text-2xl font-bold text-primary">Licence</g' about_academic_professional_journey.html
sed -i 's/<div class="text-2xl font-bold text-secondary">5+</<div class="text-2xl font-bold text-secondary">8+</g' about_academic_professional_journey.html
echo "✅ 4. À propos stats corrigées"

# 5. CERTIFICATIONS : 2025 → 2026
sed -i 's/Dernière Certification.*2025/Dernière Certification: 2026/gi' certifications_professional_validation_gallery.html
echo "✅ 5. Certifications dates mises à jour"

# 6. PROJETS : Compteurs 15+ → 8
sed -i 's/<div class="text-3xl font-bold text-secondary mb-2">15+</<div class="text-3xl font-bold text-secondary mb-2" data-target="8">8</g' projects_technical_portfolio_showcase.html
echo "✅ 6. Projets compteurs corrigés"

cd ..
echo "🎉 Corrections finales appliquées !"
