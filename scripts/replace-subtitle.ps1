$files = @( 
  '.next\\server\\chunks\\ssr\\ruthypearlswear_src_1623c076._.js',
  '.next\\server\\chunks\\ssr\\ruthypearlswear_src_1623c076._.js.map',
  '.next\\static\\chunks\\e626dab4188efac3.js',
  'out\\_next\\static\\chunks\\e626dab4188efac3.js'
)

foreach ($f in $files) {
  if (Test-Path $f) {
    (Get-Content -Raw $f) -replace 'Premium Quality Fashion & Wears for the Modern Woman', 'Premium Quality Fashion & Wears for the Modern Men and Woman' | Set-Content -Encoding UTF8 $f
    Write-Output "Patched $f"
  } else {
    Write-Output "Missing $f"
  }
}

git add -A
if ((git status --porcelain) -ne '') {
  git commit -m 'Update hero subtitle in generated files'
} else {
  Write-Output 'No changes to commit'
}

git push
