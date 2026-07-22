// templates/karmda.typ

// --------------------------------------------------
// KARMDA brand colors
// --------------------------------------------------

#let karmda-green = rgb("#167A5A")
#let karmda-dark = rgb("#173B32")
#let karmda-light = rgb("#EAF5F1")
#let muted = rgb("#66756F")


// --------------------------------------------------
// Pandoc document configuration
// --------------------------------------------------

#let conf(
  title: none,
  subtitle: none,
  authors: (),
  keywords: (),
  date: none,
  lang: "fr",
  region: none,
  abstract-title: none,
  abstract: none,
  thanks: none,
  margin: (x: 2.2cm, y: 2cm),
  paper: "a4",
  font: ("Helvetica Neue", "Arial"),
  fontsize: 11pt,
  mathfont: (),
  codefont: (),
  linestretch: 1,
  sectionnumbering: none,
  pagenumbering: none,
  linkcolor: none,
  citecolor: none,
  filecolor: none,
  cols: 1,
  doc,
) = {

  // ------------------------------------------------
  // Page configuration
  // ------------------------------------------------

  set page(
    paper: paper,
    margin: margin,
    numbering: if pagenumbering == none {
      "1"
    } else {
      pagenumbering
    },
    number-align: center,
    header: context {
      if counter(page).get().first() > 1 {
        set text(
          size: 8pt,
          fill: muted,
        )

        grid(
          columns: (1fr, auto),
          [KARMDA],
          [Documentation officielle],
        )

        v(3pt)

        line(
          length: 100%,
          stroke: 0.5pt + karmda-light,
        )
      }
    },
  )


  // ------------------------------------------------
  // Global typography
  // ------------------------------------------------

  set text(
    font: font,
    size: fontsize,
    lang: lang,
    fill: karmda-dark,
  )

  set par(
    justify: true,
    leading: 0.7em,
  )

  set heading(
    numbering: sectionnumbering,
  )


  // ------------------------------------------------
// Heading styles
// ------------------------------------------------

show heading.where(level: 1): it => {
  pagebreak(weak: true)

  block(
    width: 100%,
    above: 1.2em,
    below: 0.8em,
  )[
    #set text(
      size: 20pt,
      weight: "bold",
      fill: karmda-green,
    )

    #if it.numbering != none {
      counter(heading).display(it.numbering)
      h(0.5em)
    }

    #it.body

    #v(0.25em)

    #line(
      length: 100%,
      stroke: 1.5pt + karmda-green,
    )
  ]
}

show heading.where(level: 2): it => {
  block(
    above: 1em,
    below: 0.5em,
  )[
    #set text(
      size: 15pt,
      weight: "bold",
      fill: karmda-dark,
    )

    #if it.numbering != none {
      counter(heading).display(it.numbering)
      h(0.5em)
    }

    #it.body
  ]
}

show heading.where(level: 3): it => {
  block(
    above: 0.8em,
    below: 0.4em,
  )[
    #set text(
      size: 12pt,
      weight: "bold",
      fill: karmda-green,
    )

    #if it.numbering != none {
      counter(heading).display(it.numbering)
      h(0.5em)
    }

    #it.body
  ]
}


  // ------------------------------------------------
  // Links
  // ------------------------------------------------

  show link: set text(
    fill: karmda-green,
  )


  // ------------------------------------------------
  // Block quotes and callouts
  // ------------------------------------------------

  show quote: item => {
    block(
      width: 100%,
      inset: 12pt,
      radius: 4pt,
      fill: karmda-light,
      stroke: (
        left: 3pt + karmda-green,
      ),
    )[
      #item.body
    ]
  }


  // ------------------------------------------------
  // Tables
  // ------------------------------------------------

  set table.cell(
    inset: 7pt,
  )

  show table.cell.where(y: 0): set table.cell(
    fill: karmda-green,
  )

  show table.cell.where(y: 0): set text(
    weight: "bold",
    fill: white,
  )


  // ------------------------------------------------
  // Cover page
  // ------------------------------------------------

  if title != none {
    align(center + horizon)[
      #text(
        size: 16pt,
        weight: "bold",
        fill: karmda-green,
      )[KARMDA]

      #v(1.2cm)

      #text(
        size: 27pt,
        weight: "bold",
        fill: karmda-dark,
      )[
        #title
      ]

      #if subtitle != none {
        v(0.35cm)

        text(
          size: 14pt,
          weight: "medium",
          fill: muted,
        )[
          #subtitle
        ]
      }

      #v(0.5cm)

      #line(
        length: 35%,
        stroke: 2pt + karmda-green,
      )

      #v(0.7cm)

      #if authors.len() > 0 {
  for author in authors {
    text(
      size: 12pt,
      weight: "medium",
      fill: karmda-dark,
    )[
      #author.name
    ]

    if author.affiliation != "" {
      v(0.15cm)

      text(
        size: 10pt,
        fill: muted,
      )[
        #author.affiliation
      ]
    }

    if author.email != "" {
      v(0.1cm)

      text(
        size: 10pt,
        fill: karmda-green,
      )[
        #author.email
      ]
    }
  }
}

      #if date != none {
        v(0.3cm)

        text(
          size: 10pt,
          fill: muted,
        )[
          #date
        ]
      }

      #v(1.4cm)

      #block(
        inset: (
          x: 18pt,
          y: 10pt,
        ),
        radius: 6pt,
        fill: karmda-light,
      )[
        #text(
          size: 10pt,
          fill: karmda-green,
        )[
          Gestion scolaire moderne et accessible
        ]
      ]
    ]

    pagebreak()
  }


  // ------------------------------------------------
  // Main Markdown content
  // ------------------------------------------------

  if cols == 1 {
  doc
} else {
  columns(cols, doc)
}
}