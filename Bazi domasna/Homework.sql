--1--
--select * from Person.Person where Person.FirstName like('p%')

--2--
--select * from HumanResources.Employee as HR 
--where HR.Gender = 'M'

--3--
--select p.* from Person.Person as P
--inner join HumanResources.Employee as HR
--on p.BusinessEntityID=hr.BusinessEntityID
--where hr.JobTitle in ('Design Engineer', 'Research and Development Engineer')

--4--
--select P.FirstName from Person.Person as P
--inner join HumanResources.EmployeeDepartmentHistory as EDH
--on P.BusinessEntityID=EDH.BusinessEntityID
--inner join HumanResources.Department as D
--on EDH.DepartmentID=D.DepartmentID
--where D.Name = 'Engineering'

--5--
--select P.FirstName, A.AddressLine1 from Person.Person as P
--inner join Person.BusinessEntityAddress as BEA on P.BusinessEntityID=BEA.BusinessEntityID
--inner join Person.Address as A on A.AddressID=BEA.AddressID
--inner join Person.StateProvince as SP on A.StateProvinceID=SP.StateProvinceID
--where sp.StateProvinceCode = 'CA'


--6--
--select P.FirstName, round(sum(POH.totalDue),2) as TotalPurchaseAmount from Person.Person as P
--inner join Purchasing.ProductVendor as PV on P.BusinessEntityID=PV.BusinessEntityID
--inner join Purchasing.PurchaseOrderDetail as POD on PV.ProductID = POD.ProductID
--inner join Purchasing.PurchaseOrderHeader as POH on POD.PurchaseOrderID = POH.PurchaseOrderID
--group by P.FirstName

--7--
--select P.FirstName, sum(POH.totalDue) as TotalPurchaseAmount from Person.Person as P
--inner join Purchasing.ProductVendor as PV on P.BusinessEntityID=PV.BusinessEntityID
--inner join Purchasing.PurchaseOrderDetail as POD on PV.ProductID = POD.ProductID
--inner join Purchasing.PurchaseOrderHeader as POH on POD.PurchaseOrderID = POH.PurchaseOrderID
--inner join Purchasing.ShipMethod as SM on POH.ShipMethodID=SM.ShipMethodID
--where SM.ShipBase in ('CARGO TRANSPORT 5', 'OVERNIGHT J-FAST')
--group by P.FirstName

--8--
--select P.Name, SR.Name from Production.Product as P
--inner join Production.WorkOrder as WO on WO.ProductID = P.ProductID
--inner join Production.ScrapReason as SR on WO.ScrapReasonID = SR.ScrapReasonID




