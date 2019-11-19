import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loadingController } from '@ionic/core';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  send
  reception=0
  selectedRadio:any;
  devise_origine:string;
  devise_send:string

  devise_reception:string;
  devise_received:string;

  total=0 ;
  pays_send: string;
  disabled: boolean;
  disabled_reception: boolean;
  disabled_origine: boolean=false;
  modele_origine: any;
  disabled_MAD: boolean;
  disabled_CA: boolean;
  disabled_GB: boolean;
  disabled_CG: boolean;
  send_changed: number;
  constructor(public router:Router) {}
  calcul(){

    if (this.selectedRadio=='inclus'){
      this.total=0
     this.reception=0
      
      if (this.devise_origine=='CFA XAF' && this.devise_reception=='MAD'){
        this.intervalle_inclues_mode()
        this.reception=this.reception/61.70
           console.log(this.reception)
        this.total=this.send
           console.log(this.total)
      }
      if (this.devise_origine=='CFA XAF' && this.devise_reception=='EUR'){ 
         this.reception=this.send-(this.send*10)/100
        //Application du taux
        // this.intervalle_inclues_mode()
       this.reception=this.reception*0.0012 
          console.log(this.reception)
       this.total=this.send
          console.log(this.total)
     }
      if (this.devise_origine=='MAD' && this.devise_reception=='EUR'){
        this.reception=this.send-(this.send*10)/100
        //Application du taux
       this.reception=this.reception/9
          console.log(this.reception)
       this.total=this.send
          console.log(this.total)
      }
      if (this.devise_origine=='MAD' && this.devise_reception=='CFA XAF'){
         //Retrait des frais  
        //  this.reception=this.send-(this.send*10)/100
         //Application du taux
         this.intervalle_inclues_mode()
        this.reception=this.reception*60
           console.log(this.reception)
        this.total=this.send
           console.log(this.total)
    }
      //De l’Euro au Fcfa : 645 mul
      if (this.devise_origine=='EUR' && this.devise_reception=='CFA XAF'){
         //Retrait des frais  
         this.reception=this.send-(this.send*10)/100
         //Application du taux
        this.reception=this.reception*645
           console.log(this.reception)
        this.total=this.send
           console.log(this.total)
      }
      //De l’Euro vers MAD : 10 mul
      if (this.devise_origine=='EUR' && this.devise_reception=='MAD'){
        //Retrait des frais  
         this.reception=this.send-(this.send*10)/100
        //Application du taux
        this.reception=this.reception*10
          console.log(this.reception)
        this.total=this.send
          console.log(this.total)
      }
      }
      if (this.selectedRadio=='exclus'){
        this.total=0
       this.reception=0
      
        if (this.devise_origine=='CFA XAF' && this.devise_reception=='MAD'){ 
          this.intervalle_exclus_mode()
           this.reception=this.send
          this.reception=this.reception/61.70
             console.log(this.reception)
             let a =(this.send*0.1)
             let b=this.send
          // this.total=parseInt(this.send)*0.1+parseInt(this.send)
             console.log(this.total)
        }
        if (this.devise_origine=='CFA XAF' && this.devise_reception=='EUR'){ 
          this.intervalle_exclus_mode()
          this.reception=this.send
          //Application du taux
         this.reception=this.reception*0.0012 
            console.log(this.reception)
            let a =(this.send*0.1)
            let b=this.send
             //this.total=parseInt(this.send)*0.1+parseInt(this.send)
            console.log(this.total)
       }
        if (this.devise_origine=='MAD' && this.devise_reception=='EUR'){
          this.reception=this.send
          //Application du taux
         this.reception=this.reception/9
            console.log(this.reception)
         let a =(this.send*0.1)
         let b=this.send
           this.total=parseInt(this.send)*0.1+parseInt(this.send)
            console.log(this.total)
        }
        if (this.devise_origine=='MAD' && this.devise_reception=='CFA XAF'){
           //Retrait des frais
           this.intervalle_exclus_mode()  
           this.reception=this.send
           //Application du taux
          this.reception=this.reception*60
             console.log(this.reception)
             let a =(this.send*0.1)
             let b=this.send
              this.total=parseInt(this.send)*0.1+parseInt(this.send)
             console.log(this.total)
      }
        //De l’Euro au Fcfa : 645 mul
        if (this.devise_origine=='EUR' && this.devise_reception=='CFA XAF'){
           //Retrait des frais  
           this.reception=this.send
           //Application du taux
          this.reception=this.reception*645
             console.log(this.reception)
             let a =(this.send*0.1)
             let b=this.send
             this.total=parseInt(this.send)*0.1+parseInt(this.send)
             console.log(this.total)
        }
        //De l’Euro vers MAD : 10 mul
        if (this.devise_origine=='EUR' && this.devise_reception=='MAD'){
          //Retrait des frais  
          this.reception=this.send
          //Application du taux
          this.reception=this.reception*10
            console.log(this.reception)
            let a =(this.send*0.1)
            let b=this.send
             this.total=parseInt(this.send)*0.1+parseInt(this.send)
            console.log(this.total)
        }
        } 
    // console.log(this.devise_origine);
    // console.log(this.devise_reception);
    // if (this.selectedRadio=='inclus'){
    //   this.total=0
    //  this.reception=0
    //   if (this.devise_origine=='CFA XAF' && this.devise_reception=='MAD'){ 
    //      this.reception=this.send-(this.send*10)/100
    //      //Application du taux
    //     this.reception=this.reception/61.70
    //        console.log(this.reception)
    //     this.total=this.send
    //        console.log(this.total)
    //   }
    //   if (this.devise_origine=='CFA XAF' && this.devise_reception=='EUR'){ 
    //     this.reception=this.send-(this.send*10)/100
    //     //Application du taux
    //    this.reception=this.reception*0.0012 
    //       console.log(this.reception)
    //    this.total=this.send
    //       console.log(this.total)
    //  }
    //   if (this.devise_origine=='MAD' && this.devise_reception=='EUR'){
    //     this.reception=this.send-(this.send*10)/100
    //     //Application du taux
    //    this.reception=this.reception/9
    //       console.log(this.reception)
    //    this.total=this.send
    //       console.log(this.total)
    //   }
    //   if (this.devise_origine=='MAD' && this.devise_reception=='CFA XAF'){
    //      //Retrait des frais  
    //      this.reception=this.send-(this.send*10)/100
    //      //Application du taux
    //     this.reception=this.reception*60
    //        console.log(this.reception)
    //     this.total=this.send
    //        console.log(this.total)
    // }
    //   //De l’Euro au Fcfa : 645 mul
    //   if (this.devise_origine=='EUR' && this.devise_reception=='CFA XAF'){
    //      //Retrait des frais  
    //      this.reception=this.send-(this.send*10)/100
    //      //Application du taux
    //     this.reception=this.reception*645
    //        console.log(this.reception)
    //     this.total=this.send
    //        console.log(this.total)
    //   }
    //   //De l’Euro vers MAD : 10 mul
    //   if (this.devise_origine=='EUR' && this.devise_reception=='MAD'){
    //     //Retrait des frais  
    //     this.reception=this.send-(this.send*10)/100
    //     //Application du taux
    //     this.reception=this.reception*10
    //       console.log(this.reception)
    //     this.total=this.send
    //       console.log(this.total)
    //   }
    //   }
    //   if (this.selectedRadio=='exclus'){
    //     this.total=0
    //    this.reception=0
    //     if (this.devise_origine=='CFA XAF' && this.devise_reception=='MAD'){ 
    //        this.reception=this.send
    //        //Application du taux
    //       this.reception=this.reception/61.70
    //          console.log(this.reception)
    //          let a =(this.send*0.1)
    //          let b=this.send
    //       this.total=parseInt(this.send)*0.1+parseInt(this.send)
    //          console.log(this.total)
    //     }
    //     if (this.devise_origine=='CFA XAF' && this.devise_reception=='EUR'){ 
    //       this.reception=this.send
    //       //Application du taux
    //      this.reception=this.reception*0.0012 
    //         console.log(this.reception)
    //         let a =(this.send*0.1)
    //         let b=this.send
    //         this.total=parseInt(this.send)*0.1+parseInt(this.send)
    //         console.log(this.total)
    //    }
    //     if (this.devise_origine=='MAD' && this.devise_reception=='EUR'){
    //       this.reception=this.send
    //       //Application du taux
    //      this.reception=this.reception/9
    //         console.log(this.reception)
    //      let a =(this.send*0.1)
    //      let b=this.send
    //       this.total=parseInt(this.send)*0.1+parseInt(this.send)
    //         console.log(this.total)
    //     }
    //     if (this.devise_origine=='MAD' && this.devise_reception=='CFA XAF'){
    //        //Retrait des frais  
    //        this.reception=this.send
    //        //Application du taux
    //       this.reception=this.reception*60
    //          console.log(this.reception)
    //          let a =(this.send*0.1)
    //          let b=this.send
    //          this.total=parseInt(this.send)*0.1+parseInt(this.send)
    //          console.log(this.total)
    //   }
    //     //De l’Euro au Fcfa : 645 mul
    //     if (this.devise_origine=='EUR' && this.devise_reception=='CFA XAF'){
    //        //Retrait des frais  
    //        this.reception=this.send
    //        //Application du taux
    //       this.reception=this.reception*645
    //          console.log(this.reception)
    //          let a =(this.send*0.1)
    //          let b=this.send
    //          this.total=parseInt(this.send)*0.1+parseInt(this.send)
    //          console.log(this.total)
    //     }
    //     //De l’Euro vers MAD : 10 mul
    //     if (this.devise_origine=='EUR' && this.devise_reception=='MAD'){
    //       //Retrait des frais  
    //       this.reception=this.send
    //       //Application du taux
    //       this.reception=this.reception*10
    //         console.log(this.reception)
    //         let a =(this.send*0.1)
    //         let b=this.send
    //         this.total=parseInt(this.send)*0.1+parseInt(this.send)
    //         console.log(this.total)
    //     }
    //     } 
  }
  onChangeHandler(event: string) {
    console.log(event);
  }
  origine(){
      console.log('yes')
  }
  onSelectChange(selectedValue: any) {
    if(selectedValue.detail['value']=='ma'){
      this.devise_origine='MAD'
     // this.devise_reception='MAD'
      console.log('selected',selectedValue.detail['value'])
      this.disabled_MAD=true
      this.disabled_CA=false
      this.disabled_GB=false
      this.disabled_CG=false
    }
   else if(selectedValue.detail['value']=='ca'){
      this.devise_origine='CFA XAF'
      //this.devise_reception='CFA XAF'
      this.disabled_MAD=false
      this.disabled_CA=true
      this.disabled_GB=true
      this.disabled_CG=true
      console.log('selected',selectedValue.detail['value'])
    }
    else if(selectedValue.detail['value']=='ca'||selectedValue.detail['value']=='gb'){
      this.devise_origine='CFA XAF'
    //  this.devise_reception='CFA XAF'
      this.disabled_CA=true
      this.disabled_CG=true
      this.disabled_MAD=false
      this.disabled_GB=true
    }
    else if(selectedValue.detail['value']=='gb'){
      this.devise_origine='CFA XAF'
    //  this.devise_reception='CFA XAF'
      this.disabled_MAD=false
      this.disabled_CA=false
      this.disabled_GB=true
      this.disabled_CG=true
      console.log('selected',selectedValue.detail['value'])
    }
  }
  onSelectChange_destination(selectedValue:any){
    if(selectedValue.detail['value']=='ma'){
    //  this.devise_origine='MAD'
     this.devise_reception='MAD'
      console.log('selected',selectedValue.detail['value'])
      this.disabled_MAD=true
      this.disabled_CA=false
      this.disabled_GB=false
      //this.disabled_CG=false
    }
    else if(selectedValue.detail['value']=='ca'){
      //this.devise_origine='CFA XAF'
      this.devise_reception='CFA XAF'
      this.disabled_MAD=false
      this.disabled_CA=true
      this.disabled_GB=true
     // this.disabled_CG=true
      console.log('selected',selectedValue.detail['value'])
    }
    else if(selectedValue.detail['value']=='ca'||selectedValue.detail['value']=='gb'){
    //  this.devise_origine='CFA XAF'
      this.devise_reception='CFA XAF'
      this.disabled_CA=true
      this.disabled_GB=true
     // this.disabled_CG=false
    }
    else if(selectedValue.detail['value']=='fr'){
      //  this.devise_origine='EUR'
        this.devise_reception='EUR'
        this.disabled_CA=true
        this.disabled_GB=true
       // this.disabled_CG=false
      }
  }
  pays_A(){
    this.total=0
    this.reception=0
  }
  pays_B(){
    this.total=0
    this.reception=0
  }
  intervalle_inclues_mode(){
    if(this.devise_origine=='CFA XAF' && this.devise_reception=='MAD'){
      if(this.send>10000 && this.send<=30000){
        this.reception=this.send-3000
     }  
if(this.send>30001 && this.send<=150000){
  this.reception=this.send-(this.send*10)/100
}
if(this.send>150001 && this.send<=200000){
this.reception=this.send-17000
}
// #####

if(this.send>200001 && this.send<=250000){
  this.reception=this.send-19000
}

if(this.send>250001 && this.send<=300000){
  this.reception=this.send-21000
}

if(this.send>300001 && this.send<=350000){
this.reception=this.send-23000
}
if(this.send>350001 && this.send<=400000){
this.reception=this.send-25000
}
// ###
if(this.send>400001 && this.send<=450000){
this.reception=this.send-28000
}

if(this.send>450001 && this.send<=500000){
this.reception=this.send-31000
}
if(this.send>500001 && this.send<=550000){
this.reception=this.send-33000
}
if(this.send>550001 && this.send<=600000){
this.reception=this.send-35000
}
if(this.send>600001 && this.send<=650000){
this.reception=this.send-37000
}
if(this.send>650001 && this.send<=700000){
this.reception=this.send-39000
}
if(this.send>700001 && this.send<=750000){
  this.reception=this.send-41000
  }
  if(this.send>750001 && this.send<=800000){
    this.reception=this.send-43000
    }
    if(this.send>800001 && this.send<=850000){
      this.reception=this.send-45000
      }
      if(this.send>850001 && this.send<=900000){
        this.reception=this.send-47000
        }
        if(this.send>900001 && this.send<=950000){
          this.reception=this.send-49000
          }
        if(this.send>950001 && this.send<=1000000){
          this.reception=this.send-50000
          }
          if(this.send>1000000){
              this.contactez()
            }
  }
  if(this.devise_origine=='MAD' && this.devise_reception=='CFA XAF'){
    this.send_changed=this.send*60
    if(this.send_changed>10000 && this.send_changed<=30000){
      this.reception=this.send-(3000/61.70)
      console.log('interval 1')
   }  
if(this.send_changed>30001 && this.send_changed<=150000){
this.reception=this.send-(this.send*10)/1000
console.log('interval 2')
}
if(this.send_changed>150001 && this.send_changed<=200000){
this.reception=this.send-17000/61.70
console.log('interval 3')
}
// #####

if(this.send_changed>200001 && this.send_changed<=250000){
this.reception=this.send-19000/61.70
console.log('interval 4')
}

if(this.send_changed>250001 && this.send_changed<=300000){
this.reception=this.send-21000/61.70
console.log('interval 5')
}

if(this.send_changed>300001 && this.send_changed<=350000){
this.reception=this.send-23000/61.70
console.log('interval 6')
}
if(this.send_changed>350001 && this.send_changed<=400000){
this.reception=this.send-25000/61.70
console.log('interval 7')
}
// ###
if(this.send_changed>400001 && this.send_changed<=450000){
this.reception=this.send-28000/61.70
console.log('interval 8')
}

if(this.send_changed>450001 && this.send_changed<=500000){
this.reception=this.send-31000/61.70
console.log('interval 9')
}
if(this.send_changed>500001 && this.send_changed<=550000){
this.reception=this.send-33000/61.70
console.log('interval 10')
}
if(this.send_changed>550001 && this.send_changed<=600000){
this.reception=parseInt(this.send)-(35000/61.70)
console.log('interval 11')
}
if(this.send_changed>600001 && this.send_changed<=650000){
this.reception=this.send-37000/61.70
console.log('interval 12')
}
if(this.send_changed>650001 && this.send_changed<=700000){
this.reception=this.send-39000/61.70
console.log('interval 13')
}
if(this.send_changed>700001 && this.send_changed<=750000){
this.reception=this.send-41000/61.70
console.log('interval 14')
}
if(this.send_changed>750001 && this.send_changed<=800000){
  this.reception=this.send-43000/61.70
  console.log('interval 15')
  }
  if(this.send_changed>800001 && this.send_changed<=850000){
    this.reception=this.send-45000/61.70
    console.log('interval 16')
    }
    if(this.send_changed>850001 && this.send_changed<=900000){
      this.reception=this.send-47000/61.70
      console.log('interval 17')
      }
      if(this.send_changed>900001 && this.send_changed<=950000){
        this.reception=this.send-49000/61.70
        console.log('interval 18')
        }
      if(this.send_changed>950001 && this.send_changed<=1000000){
        this.reception=this.send-50000/61.70
        console.log('interval 19')
        }
        if(this.send_changed>1000000){
          this.contactez()
        }
}
  }
  intervalle_exclus_mode(){
    if(this.devise_origine=='CFA XAF' && this.devise_reception=='MAD'){
      if(parseInt(this.send)>10000 && parseInt(this.send)<=30000){
        this.total=parseInt(this.send)+3000

    }
    if(parseInt(this.send)>30001 && parseInt(this.send)<=150000){
      this.total=parseInt(this.send)+(parseInt(this.send)*10)/100
      console.log('im here')
  }
  if(parseInt(this.send)>150001 && parseInt(this.send)<=200000){
    this.total=parseInt(this.send)+17000
  }
  if(parseInt(this.send)>200001 && parseInt(this.send)<=250000){
    this.total=parseInt(this.send)+19000
}
  if(parseInt(this.send)>200001 && parseInt(this.send)<=300000){
      this.total=parseInt(this.send)+21000
  }
  
  if(parseInt(this.send)>300001 && parseInt(this.send)<=350000){
    this.total=parseInt(this.send)+23000
  }
  if(parseInt(this.send)>350001 && parseInt(this.send)<=400000){
    this.total=parseInt(this.send)+25000
  }
  // ###
  if(parseInt(this.send)>400001 && parseInt(this.send)<=450000){
    this.total=parseInt(this.send)+28000
  }
  
  if(parseInt(this.send)>450001 && parseInt(this.send)<=500000){
    this.total=parseInt(this.send)+31000
  }
  if(parseInt(this.send)>500001 && parseInt(this.send)<=550000){
    this.total=parseInt(this.send)+33000
  }
  if(parseInt(this.send)>550001 && parseInt(this.send)<=600000){
    this.total=parseInt(this.send)+35000
  }
  if(parseInt(this.send)>600001 && parseInt(this.send)<=650000){
    this.total=parseInt(this.send)+37000
  }
  if(parseInt(this.send)>650001 && parseInt(this.send)<=700000){
    this.total=parseInt(this.send)+39000
    }
    if(parseInt(this.send)>700001 && parseInt(this.send)<=750000){
      this.total=parseInt(this.send)+41000
      }
      if(parseInt(this.send)>750001 && parseInt(this.send)<=800000){
        this.total=parseInt(this.send)+43000
        }
        if(parseInt(this.send)>800001 && parseInt(this.send)<=850000){
          this.total=parseInt(this.send)+45000
          }
          if(parseInt(this.send)>850001 && parseInt(this.send)<=900000){
            this.total=parseInt(this.send)+47000
            }
            if(parseInt(this.send)>900001 && parseInt(this.send)<=950000){
              this.total=parseInt(this.send)+49000
              }
            if(parseInt(this.send)>950001 && parseInt(this.send)<=1000000){
              this.total=parseInt(this.send)+50000
              }
              if(this.send>1000000){
                this.contactez()
              }
    }
    if(this.devise_origine=='MAD' && this.devise_reception=='CFA XAF'){
      this.send_changed=parseInt(this.send)*60
      if(parseInt(this.send)>10000 && parseInt(this.send)<=30000){
        this.total=parseInt(this.send)+3000/61.70
    }
    if(this.send_changed>30001 && this.send_changed<=150000){
      this.total=parseInt(this.send)+(parseInt(this.send)*10)/1000
  }
  if(this.send_changed>150001 && this.send_changed<=200000){
    this.total=parseInt(this.send)+17000/61.70
  }
  if(this.send_changed>200001 && this.send_changed<=300000){
      this.total=parseInt(this.send)+19000/61.70
  }
  
  if(this.send_changed>300001 && this.send_changed<=350000){
    this.total=parseInt(this.send)+21000/61.70
  }
  if(this.send_changed>350001 && this.send_changed<=400000){
    this.total=parseInt(this.send)+25000/61.70
  }
  // ###
  if(this.send_changed>400001 && this.send_changed<=450000){
    this.total=parseInt(this.send)+28000/61.70
  }
  
  if(this.send_changed>450001 && this.send_changed<=500000){
    this.total=parseInt(this.send)+31000/61.70
  }
  if(this.send_changed>500001 && this.send_changed<=550000){
    this.total=parseInt(this.send)+33000/61.70
  }
  if(this.send_changed>550001 && this.send_changed<=600000){
    this.total=parseInt(this.send)+35000/61.70
  }
  if(this.send_changed>600001 && this.send_changed<=650000){
    this.total=parseInt(this.send)+37000/61.70
  }
  if(this.send_changed>650001 && this.send_changed<=700000){
    this.total=parseInt(this.send)+39000/61.70
    }
    if(this.send_changed>700001 && this.send_changed<=750000){
      this.total=parseInt(this.send)+41000/61.70
      }
      if(this.send_changed>750001 && this.send_changed<=800000){
        this.total=parseInt(this.send)+43000/61.70
        }
        if(this.send_changed>800001 && this.send_changed<=850000){
          this.total=parseInt(this.send)+45000/61.70
          }
          if(this.send_changed>850001 && this.send_changed<=900000){
            this.total=parseInt(this.send)+47000/61.70
            }
            if(this.send_changed>900001 && this.send_changed<=950000){
              this.total=parseInt(this.send)+49000/61.70
              }
            if(this.send_changed>950001 && this.send_changed<=1000000){
              this.total=parseInt(this.send)+50000/61.70
              }
              if(this.send_changed>1000000){
                this.contactez()
              }
    }
  
  }
  fraismode(){
    if (this.selectedRadio=='inclus'){
      this.total=0
     this.reception=0
      
      if (this.devise_origine=='CFA XAF' && this.devise_reception=='MAD'){
        this.intervalle_inclues_mode()
        this.reception=this.reception/61.70
           console.log(this.reception)
        this.total=this.send
           console.log(this.total)
      }
      if (this.devise_origine=='CFA XAF' && this.devise_reception=='EUR'){ 
         this.reception=this.send-(this.send*10)/100
        //Application du taux
        // this.intervalle_inclues_mode()
       this.reception=this.reception*0.0012 
          console.log(this.reception)
       this.total=this.send
          console.log(this.total)
     }
      if (this.devise_origine=='MAD' && this.devise_reception=='EUR'){
        this.reception=this.send-(this.send*10)/100
        //Application du taux
       this.reception=this.reception/9
          console.log(this.reception)
       this.total=this.send
          console.log(this.total)
      }
      if (this.devise_origine=='MAD' && this.devise_reception=='CFA XAF'){
         //Retrait des frais  
        //  this.reception=this.send-(this.send*10)/100
         //Application du taux
         this.intervalle_inclues_mode()
        this.reception=this.reception*60
           console.log(this.reception)
        this.total=this.send
           console.log(this.total)
    }
      //De l’Euro au Fcfa : 645 mul
      if (this.devise_origine=='EUR' && this.devise_reception=='CFA XAF'){
         //Retrait des frais  
         this.reception=this.send-(this.send*10)/100
         //Application du taux
        this.reception=this.reception*645
           console.log(this.reception)
        this.total=this.send
           console.log(this.total)
      }
      //De l’Euro vers MAD : 10 mul
      if (this.devise_origine=='EUR' && this.devise_reception=='MAD'){
        //Retrait des frais  
         this.reception=this.send-(this.send*10)/100
        //Application du taux
        this.reception=this.reception*10
          console.log(this.reception)
        this.total=this.send
          console.log(this.total)
      }
      }
      if (this.selectedRadio=='exclus'){
        this.total=0
       this.reception=0
      
        if (this.devise_origine=='CFA XAF' && this.devise_reception=='MAD'){ 
          this.intervalle_exclus_mode()
           this.reception=this.send
          this.reception=this.reception/61.70
             console.log(this.reception)
             let a =(this.send*0.1)
             let b=this.send
          // this.total=parseInt(this.send)*0.1+parseInt(this.send)
             console.log(this.total)
        }
        if (this.devise_origine=='CFA XAF' && this.devise_reception=='EUR'){ 
          this.intervalle_exclus_mode()
          this.reception=this.send
          //Application du taux
         this.reception=this.reception*0.0012 
            console.log(this.reception)
            let a =(this.send*0.1)
            let b=this.send
             //this.total=parseInt(this.send)*0.1+parseInt(this.send)
            console.log(this.total)
       }
        if (this.devise_origine=='MAD' && this.devise_reception=='EUR'){
          this.reception=this.send
          //Application du taux
         this.reception=this.reception/9
            console.log(this.reception)
         let a =(this.send*0.1)
         let b=this.send
           this.total=parseInt(this.send)*0.1+parseInt(this.send)
            console.log(this.total)
        }
        if (this.devise_origine=='MAD' && this.devise_reception=='CFA XAF'){
           //Retrait des frais
           this.intervalle_exclus_mode()  
           this.reception=this.send
           //Application du taux
          this.reception=this.reception*60
             console.log(this.reception)
             let a =(this.send*0.1)
             let b=this.send
              this.total=parseInt(this.send)*0.1+parseInt(this.send)
             console.log(this.total)
      }
        //De l’Euro au Fcfa : 645 mul
        if (this.devise_origine=='EUR' && this.devise_reception=='CFA XAF'){
           //Retrait des frais  
           this.reception=this.send
           //Application du taux
          this.reception=this.reception*645
             console.log(this.reception)
             let a =(this.send*0.1)
             let b=this.send
             this.total=parseInt(this.send)*0.1+parseInt(this.send)
             console.log(this.total)
        }
        //De l’Euro vers MAD : 10 mul
        if (this.devise_origine=='EUR' && this.devise_reception=='MAD'){
          //Retrait des frais  
          this.reception=this.send
          //Application du taux
          this.reception=this.reception*10
            console.log(this.reception)
            let a =(this.send*0.1)
            let b=this.send
             this.total=parseInt(this.send)*0.1+parseInt(this.send)
            console.log(this.total)
        }
        } 
  }
  contactez(){
    
      }
      
  // private selectedItem: any;
  // private icons = [
  //   'flask',
  //   'wifi',
  //   'beer',
  //   'football',
  //   'basketball',
  //   'paper-plane',
  //   'american-football',
  //   'boat',
  //   'bluetooth',
  //   'build'
  // ];
  // public items: Array<={ title: string; note: string; icon: string }> = [];
  // constructor() {
  //   for (let i = 1; i <= 11; i++) {
  //     this.items.push({
  //       title: 'Item ' + i,
  //       note: 'This is item #' + i,
  //       icon: this.icons[Math.floor(Math.random() * this.icons.length)]
  //     });
  //   }
  // }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
