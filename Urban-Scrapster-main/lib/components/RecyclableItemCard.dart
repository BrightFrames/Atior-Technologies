import 'package:flutter/material.dart';
import 'RecyclableItem.dart';

class RecyclableItemCard extends StatelessWidget {
  final RecyclableItem item;

  RecyclableItemCard({required this.item});

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 4,
      margin: EdgeInsets.symmetric(vertical: 8),
      child: ListTile(
        leading: CircleAvatar(
          radius: 28,
          backgroundColor: Colors.green.shade100,
          child: ClipRRect(
            borderRadius: BorderRadius.circular(28),
            child: Image.asset(
              item.imagePath,
              width: 50,
              height: 50,
              fit: BoxFit.cover,
            ),
          ),
        ),
        title: Text(
          item.name,
          style: TextStyle(fontSize: 18, fontWeight: FontWeight.w500),
        ),
        trailing: Text(
          item.price,
          style: TextStyle(fontSize: 18, color: Colors.grey[700], fontWeight: FontWeight.w600),
        ),
      ),
    );
  }
}
