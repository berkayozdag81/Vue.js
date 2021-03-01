// burada oluşturudğum değişkeni dışarıda oluşturmak istiyorsam export const u kullanmam lazım.
//mixin sayesinde kod tekrarından kurtuluruz.
export const productMixin = {
  data(){
    return{
      products:["Monitör", "Klavye" , "Masa" , "Sandalye" , "Harddisc", "Laptop"],
      searchText: ''
    }
  },
  // data lardan bir tanesinde değişiklik varsa computed çalışır onun dışında dom u çalıştırmaz.
  computed : {
    filtered () {
      return this.products.filter((element)=>{
        return element.match(this.searchText);
      });
    }
  }
}
