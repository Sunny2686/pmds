import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private usersData: any[] = [
    { serialNumber: 1, projectName: 'Healthcare Technology Innovation Centre (HTIC)-Phase II- BT/PR14471/MED/32/149/2010', cost: '10.25', status:'40',
    objectives:[
      'Scientific partnership of the ESRF',
      ' To enable access to macromolecular crystallography beamlines (ID23-1, ID29, ID30B, ID30A-1, ID23-2 and ID30A-3)',
      'To enable access to the Small Angle Scattering beamline (BM29) for collection of Small Angle X-ray Scattering Data from samples of macromolecules/macromolecular complexes prepared in India.',
      'To hold periodic training workshops in India',
      ' Collection of X-ray Diffraction and Small Angle X-ray Scattering data and on-site training.',
      ' Collection of X-ray Diffraction and Small Angle X-ray Scattering data and on-site training.'
    ]
  },
    { serialNumber: 2, projectName: 'Biodesign-Bioengineering Initiative (Phase-II) BT/PR13926/MED31/97/2010', cost: '14.25', status:'20%',
    objectives:[
      'Scientific partnership of the ESRF',
      ' To enable access to macromolecular crystallography beamlines (ID23-1, ID29, ID30B, ID30A-1, ID23-2 and ID30A-3)',
      'To enable access to the Small Angle Scattering beamline (BM29) for collection of Small Angle X-ray Scattering Data from samples of macromolecules/macromolecular complexes prepared in India.',
      'To hold periodic training workshops in India',
      ' Collection of X-ray Diffraction and Small Angle X-ray Scattering data and on-site training.',
      ' Collection of X-ray Diffraction and Small Angle X-ray Scattering data and on-site training.'
    ]
  },
    { serialNumber: 3, projectName: 'Centre For Advanced Research in Low Back Pain and Degenerative Disc Disease BT/PR35631/MED/30/2186/2019', cost: '20.25', status:'80',
    objectives:[
      'Scientific partnership of the ESRF',
      ' To enable access to macromolecular crystallography beamlines (ID23-1, ID29, ID30B, ID30A-1, ID23-2 and ID30A-3)',
      'To enable access to the Small Angle Scattering beamline (BM29) for collection of Small Angle X-ray Scattering Data from samples of macromolecules/macromolecular complexes prepared in India.',
      'To hold periodic training workshops in India',
      ' Collection of X-ray Diffraction and Small Angle X-ray Scattering data and on-site training.',
      ' Collection of X-ray Diffraction and Small Angle X-ray Scattering data and on-site training.'
    ]
  },
    { serialNumber: 4,
      objectives:[
        'Scientific partnership of the ESRF',
        ' To enable access to macromolecular crystallography beamlines (ID23-1, ID29, ID30B, ID30A-1, ID23-2 and ID30A-3)',
        'To enable access to the Small Angle Scattering beamline (BM29) for collection of Small Angle X-ray Scattering Data from samples of macromolecules/macromolecular complexes prepared in India.',
        'To hold periodic training workshops in India',
        ' Collection of X-ray Diffraction and Small Angle X-ray Scattering data and on-site training.',
        ' Collection of X-ray Diffraction and Small Angle X-ray Scattering data and on-site training.'
      ],
       projectName: 'Healthcare Technology Innovation Centre (HTIC)-Phase II- BT/PR14471/MED/32/149/2010', cost: '11.25', status:'20' },
    { serialNumber: 5,
      objectives:[
        'Scientific partnership of the ESRF',
        ' To enable access to macromolecular crystallography beamlines (ID23-1, ID29, ID30B, ID30A-1, ID23-2 and ID30A-3)',
        'To enable access to the Small Angle Scattering beamline (BM29) for collection of Small Angle X-ray Scattering Data from samples of macromolecules/macromolecular complexes prepared in India.',
        'To hold periodic training workshops in India',
        ' Collection of X-ray Diffraction and Small Angle X-ray Scattering data and on-site training.',
        ' Collection of X-ray Diffraction and Small Angle X-ray Scattering data and on-site training.'
      ],
       projectName: 'Expansion of School of International� Biodesign (SIB) programme for medical devices and implants as Phase - IV -BT/PR9367/MED/32/09/2007', cost: '100.25', status:'60' },
    { serialNumber: 6,
      objectives:[
        'Scientific partnership of the ESRF',
        ' To enable access to macromolecular crystallography beamlines (ID23-1, ID29, ID30B, ID30A-1, ID23-2 and ID30A-3)',
        'To enable access to the Small Angle Scattering beamline (BM29) for collection of Small Angle X-ray Scattering Data from samples of macromolecules/macromolecular complexes prepared in India.',
        'To hold periodic training workshops in India',
        ' Collection of X-ray Diffraction and Small Angle X-ray Scattering data and on-site training.',
        ' Collection of X-ray Diffraction and Small Angle X-ray Scattering data and on-site training.'
      ],
      projectName: 'Healthcare Technology Innovation Centre (HTIC)-Phase II- BT/PR14471/MED/32/149/2010', cost: '20.25', status:'0' },
    { serialNumber: 7,
      objectives:[
        'Scientific partnership of the ESRF',
        ' To enable access to macromolecular crystallography beamlines (ID23-1, ID29, ID30B, ID30A-1, ID23-2 and ID30A-3)',
        'To enable access to the Small Angle Scattering beamline (BM29) for collection of Small Angle X-ray Scattering Data from samples of macromolecules/macromolecular complexes prepared in India.',
        'To hold periodic training workshops in India',
        ' Collection of X-ray Diffraction and Small Angle X-ray Scattering data and on-site training.',
        ' Collection of X-ray Diffraction and Small Angle X-ray Scattering data and on-site training.'
      ], projectName: 'Healthcare Technology Innovation Centre (HTIC)-Phase II- BT/PR14471/MED/32/149/2010', cost: '40.25', status:'20' },
    { serialNumber: 8,objectives:[
      'Scientific partnership of the ESRF',
      ' To enable access to macromolecular crystallography beamlines (ID23-1, ID29, ID30B, ID30A-1, ID23-2 and ID30A-3)',
      'To enable access to the Small Angle Scattering beamline (BM29) for collection of Small Angle X-ray Scattering Data from samples of macromolecules/macromolecular complexes prepared in India.',
      'To hold periodic training workshops in India',
      ' Collection of X-ray Diffraction and Small Angle X-ray Scattering data and on-site training.',
      ' Collection of X-ray Diffraction and Small Angle X-ray Scattering data and on-site training.'
    ]
    , projectName: 'Healthcare Technology Innovation Centre (HTIC)-Phase II- BT/PR14471/MED/32/149/2010', cost: '150.25', status:'23' },
    { serialNumber: 9,
      objectives:[
        'Scientific partnership of the ESRF',
        ' To enable access to macromolecular crystallography beamlines (ID23-1, ID29, ID30B, ID30A-1, ID23-2 and ID30A-3)',
        'To enable access to the Small Angle Scattering beamline (BM29) for collection of Small Angle X-ray Scattering Data from samples of macromolecules/macromolecular complexes prepared in India.',
        'To hold periodic training workshops in India',
        ' Collection of X-ray Diffraction and Small Angle X-ray Scattering data and on-site training.',
        ' Collection of X-ray Diffraction and Small Angle X-ray Scattering data and on-site training.'
      ], projectName: 'Healthcare Technology Innovation Centre (HTIC)-Phase II- BT/PR14471/MED/32/149/2010', cost: '10.25' , status:'4'}
  ]

  constructor() { }
  public get users() {
    return this.usersData;
  }
}
