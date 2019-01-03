using System;
using DevExpress.Xpo;

namespace TourOfHeroes.src
{

  public class PersistentClasses : XPObject
  {
    public PersistentClasses() : base()
    {
      // This constructor is used when an object is loaded from a persistent storage.
      // Do not place any code here.
    }

    public PersistentClasses(Session session) : base(session)
    {
      // This constructor is used when an object is loaded from a persistent storage.
      // Do not place any code here.
    }

    public override void AfterConstruction()
    {
      base.AfterConstruction();
      // Place here your initialization code.
    }
  }

}